const password = document.getElementById("pass");
let passTries=0;
function passwordCheck(){
    let correctPass=false;
    let passArray=["123567","abcdf","AdFse23","2345674","1QWRTFSs","123SDACX"]
    for (let i = 0; i < passArray.length; i++) {
        if (password.value==passArray[i]){
            correctPass=true;
        }
        
        
    }
    if(correctPass==true){

        passTries==0;
        document.location.href="https://www.google.com/";
    }
    else{
        alert("The credentials you entered are not correct");
        passTries++;


    }
    if(passTries==5){
        //option1
       /*  document.write("You have entered the wrong password too many times "); */
       //option 2
       document.getElementById("butt").disabled=true;

    }
}