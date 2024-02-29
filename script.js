//alert("loading");
function addNewwefield(){
//console.log("adding new  field");

  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("wefield");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute('placeholder','Enter here');

  let weOb = document.getElementById("we");
  let weAddbottonOb = document.getElementById("weAddbutton");

  weOb.insertBefore(newNode,weAddbottonOb );
}    


function addNewaqfield() {

    let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("aqfield");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 3);
  newNode.setAttribute('placeholder','Enter here');

  let aqOb = document.getElementById("aq");
  let aqAddbottonOb = document.getElementById("aqAddbotton");
  aqOb.insertBefore(newNode,aqAddbottonOb)
}

//generating cv
function generateCV()
{
  //console.log("generating cv");

  let namefield=document.getElementById("namefield").value;

  let nameT1=document.getElementById("nameT1");

  nameT1.innerHTML=namefield;

//direct
    
document.getElementById("nameT2").innerHTML=namefield;

//contact
document.getElementById("contactT").innerHTML=document.getElementById("contactfield").value;

//address
document.getElementById("addressT").innerHTML=document.getElementById("addressfield").value;

document.getElementById("fbT").innerHTML=document.getElementById("fbfield").value;

document.getElementById("instaT").innerHTML=document.getElementById("instafield").value;

document.getElementById("linkedT").innerHTML=document.getElementById("linkedfield").value;

//objective

document.getElementById("objectiveT").innerHTML=document.getElementById("ObjectiveField").value;

//we
let wes=document.getElementsByClassName("weField");
 let str ="";
 for (let q of wes) {
   
  str+='<li> ${q.value} </li>';
 }

document.getElementById("weT").innerHTML=str;

//aq
let aqs=document.getElementsByClassName("eqField");
 let str1 ="";
 for(let q of aqs){
  str1+='<li> ${q.value} </li>';
 }

document.getElementById("aqT").innerHTML=str1;  


  document.getElementById("cv-form").style.display="none";
  document.getElementById("cv-template").style.display="block";
}
//print cv
function PrintCV(){
  window.print();
}




