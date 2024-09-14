var id = 0;
var total =0;
function addFunction(){
    id ++;
    var product= frm.pname.value;
    var quatity=frm.qty.value;
    var price=frm.price.value;
    var subtatol= quatity*price;
    total += subtatol;
    var row= "<tr>"
    row += "<td>" +id +"</td>";
    row += "<td>" +product +"</td>";
    row += "<td>" +quatity +"</td>";
    row += "<td>$" +price +"</td>";
    row += "<td>$" +subtatol +"</td>";
    row +="</tr>"
    document.getElementById("table").innerHTML+= row;
    document.getElementById("total").innerHTML=total;
}