const myCheckBox = document.getElementById("myCheckBox");
const myVisa = document.getElementById("myVisa");
const myCredit = document.getElementById("myCredit");
const gpay = document.getElementById("Gpay");
const MySubmit = document.getElementById("MySubmit");
const SubmitLabel = document.getElementById("SubmitLabel");
const SubmitPaymet = document.getElementById("SubmitPaymet");

MySubmit.onclick = function(){
    if(myCheckBox.checked){
        SubmitLabel.textContent = `You are Subscribed`;
    }
    else{
        SubmitLabel.textContent = `You aren't Subscribed`;
    }

    if(myVisa.checked){
        SubmitPaymet.textContent = `Pay using myVisa`;
    }
    else if(myCredit.checked){
        SubmitPaymet.textContent = `Pay using Credit`;
    }
    else if(gpay.checked){
        SubmitPaymet.textContent = `Pay using gpay`;
    }

    else{
        SubmitPaymet.textContent = `You aren't paying`;
    }
}