let forget=document.getElementById('forget1');
let sot=document.getElementsByClassName('sot');
let name=document.getElementById('name');
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
  let sot=document.getElementsByClassName("sot");
  let count=sot.length-1;
  for(let i=0;i<sot.length;i++){
    if(sot[i].className==="sot success"){
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
  const nameVal=name.value.trim();
  var tinVal=tin.value.trim();
  var emailVal=email.value.trim();
  //Application no.
  if(nameVal===""){
  setErrorMsg(name,"name cannot be blank");
  }else if(nameVal.length<=2){
    setErrorMsg(name,"name be atleast of 3 characters");
  }
   else{
    setSuccessMsg(name);
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
  const sot=input.parentElement;
  const small=sot.querySelector('small');
  sot.className="sot error";
  small.innerText=errormsgs;
}
function setSuccessMsg(input){
  const sot=input.parentElement;
  sot.className="sot success";
}