window.onload=function (){
    var kuang = document.getElementsByClassName("banner");
    var pic = document.getElementById("banner_pic1");
    var list = document.getElementById("button").getElementsByTagName("li");
    var la = document.getElementById("la");
    var ra = document.getElementById("ra");
    var timer;
    var i = 0;

    //let与var类似，只是let没有变量提升，局部作用，不受外界影响。
    function change(num){
        pic.style.marginLeft = -540*num+"px";
        for(let j = 0; j < 5; j++){
            list[j].setAttribute("class","but");
        }
        list[num].className = "current2";
        i = num;
    }
    function autoPlay() {
        i++;
        if(i == 5){
            i = 0;
        }
        change(i);
    }


//鼠标放置停止定时器
for(let j = 0 ; j < 5; j++){
    list[j].onmouseover = function(){
        change(j);
        clearInterval(timer);
        list[j].onmouseout = function(){
            timer = setInterval(autoPlay,3000);
        }
    }
}
timer = setInterval(autoPlay,3000);

la.onclick = function(){
    i = i-1;
    if(i == -1){
        i = 4;
        change(i)
    }else{
        change(i)
    }

}
ra.onclick = function(){
    i = i+1;
    if(i == 5){
        i = 0;
        change(i)
    }else{
        change(i)
    }
}
}

function getTicket(){
    var num=prompt("未领取优惠券58元/位，请输入购买票数：");
    if (num=="" || num==null){
        alert("你未购买！");
    }else {
        alert("购买成功！你购买了：" + parseInt(num) + "张");
    }
}
function youhuiTicket(){
    var num=prompt("你领取了优惠券现在是48元/位，请输入购买票数：");
    if (num==""||num==null){
        alert("你未购买！");
    }else {
        alert("购买成功！你购买了：" + parseInt(num) + "张");
    }
}










