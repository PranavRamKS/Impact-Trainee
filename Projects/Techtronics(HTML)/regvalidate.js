var nameError = document.getE1ementById('user-name') ;
var emailError= document.getE1ementById('Email-error') ;
var messageError = document. getE1ementById('pass-error') ;
var submitError = document.getE1ementById('pass2-ernor') ;

function validateUser(){
    var user = document.getElementById('username').value;
    
    if(user.length==0){
        nameError.innerHTML = 'User name sholud not be blank';
    }
}



