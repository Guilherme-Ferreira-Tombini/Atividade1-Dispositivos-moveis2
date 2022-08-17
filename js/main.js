window.onload = () => {
    "use strict";
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
};

function calculo(){
    let altura = document.getElementById('altura').value;
    let largura = document.getElementById('largura').value;
    let calculo = "O resultado da área é " + Number(altura * largura) + "cm²";
    document.getElementById('result').textContent = calculo;
}