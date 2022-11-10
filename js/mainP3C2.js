function calcular(){
    engan = document.getElementById('txtEnganche');
    finan = document.getElementById('txtFinanciar');
    pag = document.getElementById('txtPago');
    valor = document.getElementById('txtValor').value;
    plan = document.getElementById('cmbPlanes').value;
    let res;

    engan.innerHTML = "$" + (valor * .30);
    res = (valor - (valor *.30));

    if(plan == 12){
        finan.innerHTML = "$" + (res * 1.125);
        pag.innerHTML = "$" + ((res * 1.125)/plan).toFixed(2);

    }else if (plan == 18){
        finan.innerHTML = "$" + (res * 1.172);
        pag.innerHTML = "$" + ((res * 1.172)/plan).toFixed(2);

    }else if(plan == 24){
        finan.innerHTML = "$" + (res * 1.21);
        pag.innerHTML = "$" + ((res * 1.21)/plan).toFixed(2);

    }else if(plan == 36){
        finan.innerHTML = "$" + (res * 1.26);
        pag.innerHTML = "$" + ((res * 1.26)/plan).toFixed(2);

    }else if(plan == 48){
        finan.innerHTML = "$" + (res * 1.45);
        pag.innerHTML = "$" + ((res * 1.45)/plan).toFixed(2);

    }
}

function limpiar(){
    valor = document.getElementById('txtValor');
    engan = document.getElementById('txtEnganche');
    finan = document.getElementById('txtFinanciar');
    pago = document.getElementById('txtPago');

    valor.value = "";
    engan.innerHTML = "";
    finan.innerHTML = "";
    pago.innerHTML = "";

}