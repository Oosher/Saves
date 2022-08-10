
const fName =getElementby("fName"),lName=getElementby("lName"),email=getElementby("email"),textBox=getElementby("textBox");


let error1=getElementby("error1"),error2=getElementby("error2"),error3=getElementby("error3"),error4=getElementby("error4");

document.getElementById("submit").addEventListener("click", function(){
        
    notEmpty(fName,error1);
    notEmpty(lName,error2);
    notEmpty(textBox,error4);

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1|| email.value==""){

        error3.innerHTML="Email address must contain @ and . sine to be valid "
    }
    else{
        error3.innerHTML=""
    }
    console.log(fName.value);

});



function getElementby(elementId){

    
    return document.getElementById(elementId);
}

function notEmpty(form , error){
     if(form.value==""){
        error.innerHTML="This field must not be empty";
        form.focus();
    }else{
        error.innerHTML="";
    }
   

}