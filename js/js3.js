var key = '12345678';   //加密密钥 key
function setCookie(name1,value1,name2,value2)
{
    //加密
    value2 = encryptByDES(value2, key);

    var Days = 30; //此 cookie 将被保存 30 天
    var exp  = new Date();    //new Date("December 31, 9998");
    exp.setTime(exp.getTime() + Days*24*60*60*1000);
    document.cookie = name1 + "="+ escape (value1) + ";expires1=" + exp.toGMTString();
    document.cookie = name2 + "="+ escape (value2) + ";expires2=" + exp.toGMTString();
    location.href="index.html";
}



function getCookie(name1,name2)
{
    var error=document.getElementById("error_box");
    if (document.cookie==''){
        error.innerHTML="用户名或密码错误";
        error.style.color="red";
        error.style.lineHeight="60px";
    }

    var arr1 = document.cookie.match(new RegExp("(^| )"+name1+"=([^;]*)(;|$)"));
    var arr2 = document.cookie.match(new RegExp("(^| )"+name2+"=([^;]*)(;|$)"));
    var zhuceuser=unescape(arr1[2]);
    var zhucepsw=unescape(arr2[2]);

    //解密
    console.log(zhucepsw);
    zhucepsw = decryptByDES(zhucepsw,key);
    console.log(zhucepsw);

    var user=document.getElementById("usr").valueOf().value;
    var psw=document.getElementById("psw").valueOf().value;
    if(user== zhuceuser && psw== zhucepsw){
        window.location.href="圣诞节主题官网.html";
    }else{
        error.innerHTML="用户名或密码错误";
        error.style.color="red";
        error.style.lineHeight="60px";
    }
}



//DES 加密
function encryptByDES(message, key){
    var keyHex = CryptoJS.enc.Utf8.parse(key);
    var encrypted = CryptoJS.DES.encrypt(message, keyHex, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
});
    return encrypted.ciphertext.toString();
}

//DES 解密
function decryptByDES(ciphertext, key){
    var keyHex = CryptoJS.enc.Utf8.parse(key);
    var decrypted = CryptoJS.DES.decrypt({
    ciphertext: CryptoJS.enc.Hex.parse(ciphertext)
}, keyHex, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7
});
    var result_value = decrypted.toString(CryptoJS.enc.Utf8);
    return result_value;
}
























