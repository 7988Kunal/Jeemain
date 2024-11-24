let forget=document.getElementById('forget');
let pot=document.getElementsByClassName('pot');
let appl=document.getElementById('appl');
let tin=document.getElementById('tin');
let email=document.getElementById('email');
document.getElementsByTagName('body');
document.getElementById("key")
function show(){
  document.getElementById("key").innerHTML=" ";
  let digit='1234567890';
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
forget.addEventListener(('submit'),(e)=>{
  e.preventDefault();
  valiDate();
})

const sendDat=(sRate,count)=>{
  if(sRate===count){
  // swal("Success","","success");
    location.href="/index.html";
  }/*else{
    swal("Error","your scorecard is not generated","error");
  }*/
}
const successMg=()=>{
  let pot=document.getElementsByClassName("pot");
  let count=pot.length-1;
  for(let i=0;i<pot.length;i++){
    if(pot[i].className==="pot success"){
      let sRate=0+i;
      sendDat(sRate,count);
    }else{
      return false;
    }
  }
}

const isEmail=(emailVal)=>{
  var atSymbol=emailVal.indexOf("@");
  if(atSymbol<1) return false;
  var dot=emailVal.lastIndexOf('.');
  if(dot<=atSymbol+3) return false;
  if (dot===emailVal.length-1) return
  false;
  return true;
}
const istin=(tinVal)=>{
  const key=document.getElementById("key").innerHTML;
  if(tinVal!==key)return false;
    return true;
}
const valiDate=()=>{
  const applVal=appl.value.trim();
  var tinVal=tin.value.trim();
  var emailVal=email.value.trim();
  //Application no.
  if(applVal===""){
  setErrorMsg(appl,"appplication number cannot be blank");}
   else if(applVal.length!==12){
    setErrorMsg(appl,'application number must contains 12 digits number only');
  }else if(applVal[0]!=="2"){
    setErrorMsg(appl,'Invalid first digit in application no.');
  }else if(applVal[1]!=="5"){
    setErrorMsg(appl,'Invalid second digit in application no.');
  }
   else{
    setSuccessMsg(appl);
  }
    //pin
    if(tinVal===""){
    setErrorMsg(tin,"Verification code cannot be blank");
   }
   else if(tinVal.length > 6){
     setErrorMsg(tin,"Verification code must contains 6 digit no.only  ");}
   else if(tinVal.length < 6){
     setErrorMsg(tin,"Verification code must contains 6 digit no.only");}
   else if(!istin(tinVal)){
    setErrorMsg(tin,"Verification code is not verified");
  }
   else{
    setSuccessMsg(tin);
  }
    //validate email
  if(emailVal===""){
   setErrorMsg(email,"email cannot be blank");}
  else if(!isEmail(emailVal)){
    setErrorMsg(email,"Not a valid email id")
  }
  else{
    setSuccessMsg(email);
  }
    successMg();
}
function setErrorMsg(input,errormsgs){
  const pot=input.parentElement;
  const small=pot.querySelector('small');
  pot.className="pot error";
  small.innerText=errormsgs;
}
function setSuccessMsg(input){
  const pot=input.parentElement;
  pot.className="pot success";
}
