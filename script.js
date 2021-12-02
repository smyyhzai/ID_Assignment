//navigation bar fixed to top of website

var navbar = document.getElementById("navbar");
var menu = document.getElementById("menu");

window.onscroll = function () {
    if (window.pageYOffset >= menu.offsetTop) {
        navbar.classList.add("sticky");
    }
    else {
        navbar.classList.remove("sticky");

    }
}

//form response alert
function alertFunction(){
    alert("Comment submitted successfully. Thank you! ");
}

//current date and time
const d = new Date();
document.getElementById("datetime").innerHTML = d;