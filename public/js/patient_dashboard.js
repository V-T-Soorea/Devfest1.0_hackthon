var bp = document.getElementById("bp");
var temp = document.getElementById("temp");
var sugar = document.getElementById("sugar");
var new_reading = document.getElementById("reading");

new_reading.addEventListener("click",function(){
    
    var firebaseDef = firebase.database().ref();
    firebaseDef.child("Text").set("hello")
    // var bpValue = bp.value
    // firebaseDef.push.set(bpValue);
    // firebaseDef.push.set(temp.value);
    // firebaseDef.push.set(sugar.value);
});