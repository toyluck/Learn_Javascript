/**
 * Created by anybody on 2016/9/6.
 *
 * 简化版 MarkDown
 */

// 1. 将空行把文件分割成多个段落

function splitSection( text ) {
    var sections=text.split("\n\n");
    return sections;
}
// 2. 将标题段落中的 %删除，记录个数  返回该段落属性

function countTitle(section){
    var headerCount=0;
    while (section.charAt(headerCount)==0)
         headerCount++;
    if (headerCount>0){
        return {
            type:"h"+headerCount,content:section.slice(headerCount+1)
        }
    }else {
        return{
            type:"p",content:section
        }
    }

}

// 收集 * *  {} 之间 和 正常的文本

function splitParagraph( paragraph ) {
    function split(pos){
        if (pos ==paragraph.length){
            return [];
        }else if (paragraph.charAt(pos)=="*"){
            var end=findClosing("*",pos+1),
                frag={type:"emphasized",content:paragraph.slice(pos+1,end)};
            return [frag].concat(split(split(end+1)));//递归计算下一个content
        }else if(paragraph.charAt(pos)=="{"){
            var end=findClosing("}",pos+1),
                frag={type:"footnode",content:paragraph.slice(pos+1,end)};
                return [frag].concat(split(split(end+1)));
        }else {
            var end=findOpeningOrEnd(pos),
                frag={type:"normal",content:paragraph.slice(pos+1,end)};
        }
    }
    function findClosing(cma,pos){
        var end=paragraph.indexOf(cma,pos);
        if (end==-1)throw new Error("Missing close '"+cma+"'" );
        return end;
    }
    function findOpeningOrEnd( pos ) {
        function indexOrEnd( character ) {
            var index=paragraph.indexOf(character,pos);
            return index===-1?paragraph.length:index;
        }
        return Math.min(indexOrEnd("*"),indexOrEnd("{"));
    }
    return split(0);
}