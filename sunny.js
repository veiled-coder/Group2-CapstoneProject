let menulogo1= document.getElementById("Menulogo1"); //zindex is 6
let menulogo2= document.getElementById("Menulogo2"); //zindex is 5
let modal=document.getElementById("MobileMenu");

// This means when the logo on top (zindex 6) is clicked, then it should hide
menulogo1.onclick=function(){
    modal.style.visibility= "visible";
    menulogo1.classList.add('hidden');
}
// And when the logo on top now (zindex 5) which was behind before,when clicked, the former should show
menulogo2.onclick=function(){
    modal.style.visibility= "hidden";
    menulogo1.classList.remove('hidden');
     
}