/* Variabelen voor opslaan in lijst */
var buttonList = document.querySelector("section article button");
var ongedaanList = document.querySelector(".ongedaan");
var artikelList = document.querySelector("article");

//Voor lijst en download
var openInput = document.querySelector('.openLijst');
var input = document.querySelector('.list input');
var list = document.querySelector('.list');
var buttonremoveElement = document.querySelector('section button');
var switchButton = document.querySelector('.switch');
var currentList = document.querySelector('.lijst section ul li:nth-child(3)');


//Laat input zien
function inputList(){
    input.style.display = "block";
    openInput.style.display = "none";
}

//Wanneer er op enter wordt gedrukt wordt de value gepushed naar de list
input.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 is enter
        input.value;
        var entry = document.createElement('li');
        entry.appendChild(document.createTextNode(input.value));
        entry.classList.add("new")
        list.appendChild(entry);

        openInput.style.display = "block";
        buttonremoveElement.style.display = "block";
        input.style.display = "none";
    }
});

function removeItem(){
    var listElement = document.querySelector('li.new');
    listElement.remove();
};

switchButton.addEventListener("click", function downloadDone(){
    currentList.classList.add("downloaded");
})

/*lijst*/
var toggleList = function toggleList(){
    if(buttonList.innerHTML == "Opslaan"){
        buttonList.innerHTML = "Opgeslagen";
        ongedaanList.style.visibility = "visible";
    }
    else{
        buttonList.innerHTML = "Opslaan";
        ongedaanList.style.visibility = "hidden";
    }
};

var weg = function weg(){
    artikelList.classList.add("weggooien");
    paragraphText.classList.add("textnaarboven");
};

/*lijst*/
buttonList.addEventListener('click', toggleList);
ongedaanList.addEventListener('click', weg);

openInput.addEventListener("click", inputList);
buttonremoveElement.addEventListener("click", removeItem);