/**
 * Created by anybody on 2016/9/24.
 */
/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {


    var city = city_input.value.trim();
    var aqi = value_input.value.trim();
    aqiData[city] = aqi;

}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var tbody = aqi_table.querySelector("tbody");
    tbody.innerHTML = "";
    console.log(aqiData);
    var i, keys = Object.keys(aqiData);
    for (i = 0; i < keys.length; i++) {
        var key = keys[i];
        const data = aqiData[key];
        // console.log("data = " + data + "________" + data[0][0] + "___" + data[0]);
        tbody.appendChild(geneAqiItem([key, data]));
    }

}
function geneAqiItem( data ) {
    const tr = document.createElement("tr");
    tr.appendChild(ElementUtils.createElement("td", data[0]));
    tr.appendChild(ElementUtils.createElement("td", data[1]));
    // 命名一个dataset 属性
    tr.appendChild(ElementUtils.createElement("td", "<button data-t='"+data[0]+"'>删除</button>"));
    return tr;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle( event ) {
    // do sth.
    console.log(event.target.dataset.t);
    var parentNode = event.target.parentNode.parentNode;
    // console.log(event + "____" + parentNode);
    var node_key = parentNode.childNodes[0].innerHTML;
    // console.log("node_key = " + node_key);
    delete aqiData[node_key];

    renderAqiList();
}
const aqi_table = ElementUtils.getFirstElement("#aqi-table");
const city_input = ElementUtils.getFirstElement("#aqi-city-input");
const value_input = ElementUtils.getFirstElement("#aqi-value-input");
function init() {
    EventUtls.addHandler(city_input, "keyup", function ( event ) {
        // console.log(event.target.value);
        checkInput();

    });
    EventUtls.addHandler(value_input, "keyup", function ( event ) {
        checkInput();
    });
    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
    const add_btn = document.querySelector("#add-btn");
    add_btn.addEventListener("click", addBtnHandle, false);
    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

    EventUtls.addHandler(aqi_table, "click", delBtnHandle);
}
function checkInput() {

    // 匹配非 中英文字符
    var onlyAN = /[^a-zA-Z\u4E00-\u9FA5]/g;
    // 匹配数字
    var contaierNb = /[^1-9]/g;

    if (onlyAN.test(city_input.value)) {

        console.log("只能为 中英文");
    }

    if (value_input && contaierNb.test(value_input.value)) {
        console.log("不能包含其他字符,必须为纯整数!");
    }

}
init();
