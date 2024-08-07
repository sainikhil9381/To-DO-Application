const inputBox =document.getElementById("inputbox");
const listcontainer =document.getElementById("listcontainer");

function addTask(){
    if(inputBox.value ===''){
    alert("dont you have sense go and sleep????");
}
else{
    let li=document.createElement("li");
    li.innerHTML=inputBox.value;
    
    let span= document.createElement("span");
    span.innerHTML="\u00d7";
    li.appendChild(span);
    listcontainer.appendChild(li);
}
inputBox.value=""
saveData();
}
listcontainer.addEventListener("click",function(e){
if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked");
    saveData();
}
else if(e.target.tagName ==="SPAN"){
    // localStorage.removeItem("data");
    e.target.parentElement.remove();
    saveData();
}
},false);
function saveData(){
    localStorage.setItem("data",listcontainer.innerHTML)
}
function showTask(){
    listcontainer.innerHTML=localStorage.getItem("data");
}
showTask();

