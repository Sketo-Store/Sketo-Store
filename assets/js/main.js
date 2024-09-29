let toUpButton = document.getElementById("to-top");

window.onscroll = function () {  
    if(window.scrollY >= 300){
        toUpButton.style.display = "block";
    }else{
        toUpButton.style.display = "none";
    }
}


toUpButton.onclick = function () {  
    window.scrollTo({
        left : 0,
        top : 0,
        behavior: "smooth"
    })
}