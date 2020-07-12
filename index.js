document.getElementById("login").addEventListener("click",function(){
    var user = document.getElementById("user").value
    var pass = document.getElementById("pass").value
    if(user == "doctor" && pass == "doctor"){
        
        document.getElementById("login").href = "./dashboard/doctor_dashboard.html";
    }
    else if(user == "patient" && pass == "patient"){
        
        document.getElementById("login").href = "./dashboard/patient_dashboard.html";
    }
});

