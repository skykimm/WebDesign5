var slide = document.querySelector(".slidebox");
var count=0;
var openmodal = document.querySelector(".openmodal");

function slides(){
    if(count==2){
        count=0;
    }
    else{
        count++;
    }
    slide.style.right = 800*(-count)+"px";
}
window.setInterval("slides()",2000);

function openmo(){
    openmodal.style.display="block";
}
function close(){
    openmodal.style.display="none";
}
openmodal.addEventListener("click",openmo);
openmodal.addEventListener("click",close);