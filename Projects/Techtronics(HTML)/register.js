
function vali(){
    var username=document.getElementById("name").value;
    var password=document.getElementById("pass").value;
    if(username!="user"){
        alert("Invalid username");
        return false;
    }
    else if(password!="user"){
        alert("Invalid password");
        return false;
    }
}