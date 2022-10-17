function calcular(){
    pla = 0;
    va = document.getElementById('va').value;
    en = document.getElementById('en').value;
    tab = document.getElementById('tabla').value;
    
    re = va - en;
    
    if (tab == 12) {
        pla = 1.125
    } else if(tab == 18){
        pla = 1.172
    }else if(tab == 24){
        pla = 1.21
    }else if(tab == 36){
        pla = 1.26
    }else{
        pla = 1.45
    }
    document.getElementById("tf").value = re*pla;
    tf = document.getElementById('tf').value;
    
    document.getElementById("pm").value = tf/tab;

}

function limpiarCaja() {
    document.getElementById("tf").value = "";
    document.getElementById("va").value = "";
    document.getElementById("en").value = "";
    document.getElementById("pm").value = "";
}