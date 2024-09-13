var id=0;
var total =0;
function add(){
    id++;
    var pname = frm.pname.value;
    var qty = frm.qty.value;
    var price = frm.up.value;
    var sub = qty*price;
    total+= sub;
    var row ="<tr>";
    row += "<th>" + id + "</th>";
    row += "<th>" + pname + "</th>";
    row += "<th>" + qty + "</th>";
    row += "<th>$" + price+ "</th>";
    row += "<th>$" + sub + "</th>";
    row +="</tr>"
    document.getElementById('table').innerHTML +=row;
    document.getElementById('total').innerHTML = "$" +total;
}