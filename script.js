var upbutton = document.getElementById("upBtnUp");

var logoimg = document.getElementById("logo");

var myHeader = document.getElementsByTagName("header");

var Lghtmode = document.getElementById("sun");
var Drkmode = document.getElementById("moon");

window.onscroll = function(){
  if (document.body.scrollTop > 20) {
    upbutton.style.display = "block";
    
    if (document.body.scrollTop > 0) {
      logoimg.classList.add("logo");
    }else{
      logoimg.classList.remove("logo");
    }

  }else{
    upbutton.style.display = "none";
    
    if (document.body.scrollTop > 500) {
      logoimg.sty
    }else{
      logoimg.classList.remove("logo");
    }
  }
}

upbutton.onclick = function(){
  document.body.scrollTop = 0;
}

Lghtmode.onclick = function(){
  document.body.style.backgroundColor = "rgba(158, 158, 158, 0.637)";
  Lghtmode.style.display = "none";
  Drkmode.style.display = "block";
}

Drkmode.onclick = function(){
  document.body.style.backgroundColor = "rgb(63, 63, 63)";
  Drkmode.style.display = "none";
  Lghtmode.style.display = "block";
}