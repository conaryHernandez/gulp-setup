var actionOpen=document.getElementsByClassName("btn-open");
var actionClose=document.getElementsByClassName("btn-close");
var modal=document.getElementsByClassName("modal");

function showMsg() {
	modal[0].setAttribute("class","modal modal-view");
}

function closeMsg() {
	modal[0].setAttribute("class","modal modal-hide");
}

function auxClose(e) { 
    if (e.keyCode == 27) { 
      modal[0].setAttribute("class","modal modal-hide");
    } 
}

actionOpen[0].addEventListener("click",showMsg,false);
actionClose[0].addEventListener("click",closeMsg,false);
document.addEventListener("keydown",auxClose,false);