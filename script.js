function goBack(){
    document.getElementById("modalDifficulty").style.visibility = "hidden";
    document.getElementById("modalRules").style.visibility = "hidden";
    document.getElementById("modalAuthors").style.visibility = "hidden";
    document.getElementById("menu").style.visibility = "visible";
}

function openModalDifficulty(){
    document.getElementById("modalDifficulty").style.visibility = "visible";
    document.getElementById("menu").style.visibility = "hidden";
}

function openModalRules(){
    document.getElementById("modalRules").style.visibility = "visible";
    document.getElementById("menu").style.visibility = "hidden";
}

function openModalAuthors(){
    document.getElementById("modalAuthors").style.visibility = "visible";
    document.getElementById("menu").style.visibility = "hidden";
}

function startGameEasy(){
    document.getElementById("modalDifficulty").style.visibility = "hidden";
    document.getElementById("modalGame").style.visibility = "visible";

}

function startGameHard(){
    document.getElementById("modalDifficulty").style.visibility = "hidden";
    document.getElementById("modalGame").innerHTML = `
    <div>
        tu bude otazka
    </div>
    <div class="row">
        <div class="column">
            <div>
                tu bude krajina co treba uhadnut
            </div>
            <div>
                tu bude counter na chyby
            </div>
        </div>
        <div>
            tu bude drop container
        </div>
    </div>
    <div>
        tu budu vlajky na dragovanie
    </div>
    `
    document.getElementById("modalGame").style.visibility = "visible";

}