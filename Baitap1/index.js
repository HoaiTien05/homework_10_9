
var id=0;
function sell() {
    id++;
    var pname= form.pname.value;
    var qty = form.quatity.value;
    var Uprice = form.unitprice.value;
    var count = form.discount.value;
    var sub = qty * Uprice*(1-count/100);
    var row = "<tr>";
    row += "<td>" + id + "</td>";
    row += "<td>" + pname + "</td>";
    row += "<td>" + qty + "</td>";
    row += "<td>$" + Uprice + "</td>";
    row += "<td>" + count + "</td>";
    row += "<td>$" + sub + "</td>";
    row +="</tr>";
    document.getElementById("table").innerHTML +=row;
}