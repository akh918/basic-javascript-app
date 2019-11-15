

//storing field data into variables
var firstName = document.myform.fname;
var lastName = document.myform.lname;
var dob = document.myform.dob;
var email = document.myform.email;
var password = document.myform.pass;
var repass = document.myform.repass;
var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z_\-\.])+\.([A-Za-z]{2,4})$/;

//storing error message id into variables
var p1 = document.getElementById("p1");
var p2 = document.getElementById("p2");
var p3 = document.getElementById("p3");
var p4 = document.getElementById("p4");
var p5 = document.getElementById("p5");
var p6 = document.getElementById("p6");

//creating event listner with field variables
firstName.addEventListener("blur", nameVerify ,true);
lastName.addEventListener("blur" , lVerify , true);
dob.addEventListener("blur", dobVerify ,true);
email.addEventListener("blur" , eVerify , true);
password.addEventListener("blur", pVerify ,true);
//repass.addEventListener("blur" , repVerify , true);

//validation function
function validateform(){
//var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

// Storing the value above into sessionStorage
    sessionStorage.setItem("firstName", firstName.value);
    sessionStorage.setItem("lastName", lastName.value);
    sessionStorage.setItem("dob", dob.value);
    sessionStorage.setItem("email", email.value);
    //sessionStorage.setItem("password", password.value);
    

    if(firstName.value == "" && lastName.value =="" && dob.value == "" && email.value =="" && password.value =="" && repass.value == ""){
        p1.innerHTML="* this field is manadatory";
        p2.innerHTML="* this field is manadatory";
        p3.innerHTML="* this field is manadatory";
        p4.innerHTML="* this field is manadatory";
        p5.innerHTML="* this field is manadatory";
        p6.innerHTML="* this field is manadatory";
    }
    /*if(isNaN(firstName)){
        p1.innerHTML = "* value should be character";
    }*/

    /*if(reg.test(email.value)== false){
        p4.innerHTML="* email should be valid";
        return false;
    }
    else{
        document.getElementById("p4").innerHTML="";
    }*/


    if(password.value == "" ){
        document.getElementById("p5").innerHTML="* this field is manadatory";
        //alert("email is required");
        return false;
    }
    else{
        document.getElementById("p5").innerHTML="";
    }


    if(repass.value== ""){
        document.getElementById("p6").innerHTML="* this field is manadatory";
        //alert("email is required");
        return false;
    }

    else{
        document.getElementById("p6").innerHTML="";
    }


    if(password.value == repass.value){
        return true;
    }
    else{
        document.getElementById("p6").innerHTML="* password and confirm password should be same";
        return false;
    }
    //myform.sub.disabled = true;

    return true;
}

/*function nameVerify(){
    if(firstName.value != ""){
        p1.innerHTML="";
        return true;
    }
}*/

// below functions are eventListener functions
function nameVerify() {
    if(!isNaN(firstName.value)){
        p1.innerHTML = "* this field requied character";
        return false;
    }
    else if(firstName.value != ""){
        p1.innerHTML="";
        return true;
    }
}
function lVerify(){
    if(lastName.value == ""){
        p2.innerHTML = "* this field is manadatory";
        return false;
    }
    else if(!isNaN(lastName.value)){
        p2.innerHTML = "* this field requied character";
        return false;
    }
    else if(lastName.value != ""){
        p2.innerHTML="";
        return true;
    }
}
function dobVerify(){
    if(dob.value != ""){
        p3.innerHTML="";
        return true;
    }
}
function eVerify(){
    if(email.value == ""){
        p4.innerHTML = "* this field is manadatory";
        return false;
    }
    else if(reg.test(email.value)== false){
        p4.innerHTML="* email should be valid";
        return false;
    }
    else {
        p4.innerHTML = "";
        return true;
    }
}
function pVerify(){
    if(password.value == ""){
        p5.innerHTML = "* this field is manadatory";
        return false;
    }
    if(password.value != ""){
        p5.innerHTML = "";
        return true;
    }
}

function repVerify(){
    if(repass.value != ""){
        p6.innerHTML="";
        return true;
    }
}
