function xuyuan(){
    var wishtxt=document.getElementById("wishtxt");
    var sdlr=document.getElementById("shengdanlr");
    var str=prompt("开始许愿啦！");
    if (str=="" || str==null){
        alert("愿望不能为空哦，不然圣诞老人就没办法给你送礼物了！");
        xuyuan();
    }else {
        str="你的圣诞节愿望是："+str;
        wishtxt.innerHTML=str+"<br>        你的愿望实现啦，快看圣诞老人带着礼物来啦！";
        wishtxt.style.whiteSpace="pre";
        sdlr.style.background="url(images/14.png) no-repeat";
        sdlr.style.backgroundSize="100%";
    }

}