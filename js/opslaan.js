/* Variabelen voor opslaan op overzichtspagina */
var button = document.querySelector(".overzicht section article button");
var ongedaan = document.querySelector(".overzicht section article .ongedaan");
var blink = document.querySelector("a[href='account/lijst.html']");

/*overzichtspagina*/
var toggle = function toggle(){
    if(button.innerHTML == "Opslaan"){
        button.innerHTML = "Opgeslagen";
        ongedaan.style.visibility = "visible";
        blink.classList.add("blinktekst");
    }
    else{
        button.innerHTML = "Opslaan";
        ongedaan.style.visibility = "hidden";
        blink.classList.remove("blinktekst");
    }
};

/*overzichtspagina*/
button.addEventListener('click', toggle);
ongedaan.addEventListener('click', toggle);