var upbutton = document.getElementById("upBtnUp");
var logoimg = document.getElementById("logo");

window.onscroll = function(){
  if (document.body.scrollTop > 20) {
    upbutton.style.display = "block";
    
    if (document.body.scrollTop > 500) {
      logoimg.classList.add("logo");
    }else{
      logoimg.classList.remove("logo");
    }

  }else{
    upbutton.style.display = "none";
    
    if (document.body.scrollTop > 500) {
      logoimg.classList.add("logo");
    }else{
      logoimg.classList.remove("logo");
    }
  }
}

upbutton.onclick = function(){
  document.body.scrollTop = 0;
}