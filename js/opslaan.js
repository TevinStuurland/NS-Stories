/* Variabelen voor opslaan op overzichtspagina */
var button = document.querySelector(".overzicht section article button");
var ongedaan = document.querySelector(".overzicht section article .ongedaan");

/*overzichtspagina*/
var toggle = function toggle(){
    if(button.innerHTML == "Opslaan"){
        button.innerHTML = "Opgeslagen";
        ongedaan.style.visibility = "visible";
    }
    else{
        button.innerHTML = "Opslaan";
        ongedaan.style.visibility = "hidden";
    }
};

/*overzichtspagina*/
button.addEventListener('click', toggle);
ongedaan.addEventListener('click', toggle);