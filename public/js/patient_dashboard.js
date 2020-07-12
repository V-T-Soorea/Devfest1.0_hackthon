var bp = document.getElementById("bp");
var temp = document.getElementById("temp");
var sugar = document.getElementById("sugar");
var new_reading = document.getElementById("reading");

new_reading.addEventListener("click",function(){
    
    // var firebaseDef = firebase.database().ref();
    // firebaseDef.child("Text").set("hello")
    // var bpValue = bp.value
    // firebaseDef.push.set(bpValue);
    // firebaseDef.push.set(temp.value);
    // firebaseDef.push.set(sugar.value);
    // var inner = document.getElementById("patient").innerHTML;
    // inner = inner + "<tr><th>" + Date() + "</th><td>" + bp.value + "</td><td>" + temp.value + "</td><td>" + sugar.value + "</td></tr>";
    // window.alert(inner);

    var table = document.getElementById("patient");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes();
    cell1.innerHTML = date + " " + time;
    cell2.innerHTML = bp.value;
    cell3.innerHTML = temp.value;
    cell4.innerHTML = sugar.value;
});
