var $ = function (id) {
    return document.getElementById(id); 
};

var calculate = function() {
    var subtotal = parseFloat($("subtotal").value);
    var taxrate = parseFloat($("tax_rate").value);
    
    var tax = subtotal * taxrate;
    var total = subtotal + tax;
    
    $("sales_tax").value = tax;
    $("total").value = total;
};

var clear = function() {
    $("subtotal").value = "";
    $("tax_rate").value = "";
    $("sales_tax").value = "";
    $("total").value = "";
}

window.onload = function() {
    $("calculate").onclick = calculate;
    $("clear").onclick = clear;
}



