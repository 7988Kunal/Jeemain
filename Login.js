let form=document.getElementById('loginform');
let lot=document.getElementsByClassName('lot');
let apple=document.getElementById('apple');
let pin=document.getElementById('pin');
let password=document.getElementById('password');
const ellipse=document.querySelector('.ellipse');
const down=document.querySelector('.fa-caret-down');
const iff=document.querySelector('.iff');
const ellipsebar=document.querySelector('.ellipsebar');
document.getElementsByTagName('body');
document.getElementById("key")

function Reg(){
  swal("Closed","NEET(UG)-2024 Registration has closed","error");
}
ellipse.addEventListener('click',()=>{
  ellipsebar.classList.toggle('rock');
  // ellipsebar.style.height="171px";
})
down.addEventListener('click',()=>{
  iff.classList.toggle('stoke');
  // ellipsebar.style.height="300px";
})
function show(){
  document.getElementById("key").innerHTML=" ";
  let digit='1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let val='';
   for(let i=0;i<6;i++){
     let store=digit.charAt(Math.floor(Math.random()*digit.length));
     val=val+store;
   }
   document.getElementById("key").innerHTML=val;
}
function refresh(){
  show();
}
form.addEventListener(('submit'),(e)=>{
  e.preventDefault();
  valiDate();
})

const sendData=(sRate,count)=>{
  if(sRate===count){
   swal("Success!!","you are login","success");
    location.href="https://examinationservices.nic.in/JeeMain2025/root/Home.aspx?enc=Ei4cajBkK1gZSfgr53ImFVj34FesvYg1WX45sPjGXBqTRkzOFoiGPd1JFIpDHbov";
  }else{
    swal("Error","Wrong Credentials","error");
  }
}
const successMsg=()=>{
  let lot=document.getElementsByClassName("lot");
  let count=lot.length-1;
  for(let i=0;i<lot.length;i++){
    if(lot[i].className==="lot success"){
      let sRate=0+i;
      sendData(sRate,count);
    }else{
      return false;
    }
  }
}
const isPin=(pinVal)=>{
  const key=document.getElementById("key").innerHTML;
  if(pinVal!==key)return false;
    return true;
}
const valiDate=()=>{
  const appleVal=apple.value.trim();
  var pinVal=pin.value.trim();
  var passwordVal=password.value.trim();
  //Application no.
  if(appleVal===""){
  setErrorMsg(apple,"appplication number cannot be blank");}
   else if(appleVal.length!==12){
    setErrorMsg(apple,'application number must contains 12 digits number only');
  }else if(appleVal[0]!=="2"){
    setErrorMsg(apple,'Invalid first digit in application no.');
  }else if(appleVal[1]!=="5"){
    setErrorMsg(apple,'Invalid second digit in application no.');
  }else if(appleVal[2]!=="0"){
    setErrorMsg(apple,'Invalid third digit in application no.');
   }else if(appleVal[3]!=="3"){
    setErrorMsg(apple,'Invalid fourth digit in application no.');
   }else if(appleVal[4]!=="1"){
    setErrorMsg(apple,'Invalid fifth digit in application no.');
   }else if(appleVal[5]!=="0"){
    setErrorMsg(apple,'Invalid sixth digit in application no.');
   }
   else{
    setSuccessMsg(apple);
  }
    //pin
    if(pinVal===""){
    setErrorMsg(pin,"Security Pin cannot be blank");
   }
   else if(pinVal.length > 6){
     setErrorMsg(pin,"Security Pin must contains 6 digit no.only  ");}
   else if(pinVal.length < 6){
     setErrorMsg(pin,"Security Pin must contains 6 digit no.only");}
   else if(!isPin(pinVal)){
    setErrorMsg(pin,"Security pin not verified");
  }
   else{
    setSuccessMsg(pin);
  }
  //password
  if(passwordVal===""){
    setErrorMsg(password,"password cannot be blank");
  }else if(passwordVal.length<=6){
    setErrorMsg(password,"password must contains 8 characters");
  }
  else{
    setSuccessMsg(password);
  }
    successMsg();
}
function setErrorMsg(input,errormsgs){
  const lot=input.parentElement;
  const small=lot.querySelector('small');
  lot.className="lot error";
  small.innerText=errormsgs;
}
function setSuccessMsg(input){
  const lot=input.parentElement;
  lot.className="lot success";
}
