/**
 * Created by anybody on 2016/9/14.
 */

(function () {
    var drawing = document.querySelector("#drawing");
    if (drawing.getContext) {
        var context = drawing.getContext("2d");
        context.fillStyle = "#22ff22";
        // context.fillRect(20,20,100,100);
        // 最后一个参数为 透明度

        //  context.fillStyle="rgba(0,0,255 )";
        // context.fillRect(10,30,90,90);

        // 矩形骨架
        // context.fillStyle="rgba(222,122,255,0.5)";
        // context.strokeRect(10,10,60,60);
        // 将一定区域设置完全透明
        // context.clearRect(45,45,40,40);
         context.fillStyle="rgba(0,255,255,1)";

        context.beginPath();
        // 圆心x,y ,半径,弧度,
        context.arc(100, 100, 99, 0, 2 * Math.PI, false);
        //
        context.moveTo(194, 100);

        context.arc(100, 100, 94, 0, 2 * Math.PI, false);
        context.moveTo(100, 100);
        context.lineTo(35, 100);
        context.stroke();

        context.font = "bold 14px Arial";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText("12", 100, 20);
    }

})();