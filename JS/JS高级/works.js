function fbnq(n){
    return n<=2?1:fbnq(n-1)+fbnq(n-2)
}

var onmessage=function(event){
    var number =event.data;
    console.log('分线程接收主线程发送的数据'+number);
    var result=fbnq(number);
    postMessage(result);
    console.log('分线程向主线程返回数据'+result);
}