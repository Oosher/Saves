function sponsPopup(sponsor,sponseBox,display){
document.getElementById(sponsor).addEventListener("click",function(){
document.getElementById(sponseBox).style.display=display;
document.getElementById("sponsorFocus").style.display= display;


});
}


sponsPopup("sponsOne","sponserBox1","block");
sponsPopup("closeSponserBox1","sponserBox1","none");
