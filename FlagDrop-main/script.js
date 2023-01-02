function goBack(){
    document.getElementById("modalGame").style.visibility = "hidden";
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

    document.getElementById("modalGame").innerHTML = `
    <div class="content">
    
    <h4 id="question"></h4>
    
    <section class="nameOfStatesContainer">
      <div id="argentinaDrop" class="nameOfStates" data-draggable-id="argentina">
        <span id="span">Argentína</span>
      </div>
    </section>
    
    <section class="flag-container" id="flagContainer">
      <img draggable="true" class="flags" src="India.png" id="india" alt="India">
      <img draggable="true" class="flags" src="Argentina.png" id="argentina" alt="Argentina">
      <img draggable="true" class="flags" src="Britania.png" id="britania" alt="Britania">
    </section>

    <section id="scoreContainter" class="scoreContainterClass">
      <div id="scoreBox" class="scoreBoxClass">
        MISTAKES: <span id="score" class="scoreClass">0</span>
      </div>
    </section>
    <section id="controlButtons" class="controlButtons">
        <div class="row">
            <div class="buttonDiv">
                <button class="button-35" type="button" onclick="goBack()">Go Back</button>
            </div>
            <div class="buttonDiv">
                <button class="button-35" type="button" onclick="">Next</button>
            </div>
        </div>
    </section>
  </div>
    `;
    $.ajax({
        type: "GET",
        url: "data.json",
        dataType: "json",

        success: function (data) {
            document.getElementById("question").innerHTML = data.questionFlags;
        }
    });
    gameLogic();
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
    `;
    
    document.getElementById("modalGame").style.visibility = "visible";
    

    
}


function gameLogic() {
    console.log('moore');

// gameLogic
let images = document.querySelectorAll(".flags");
let dropFlagTo = document.getElementById("argentinaDrop");
let nameOfState = document.getElementById("span");
let mistakesSpan = document.getElementById("score");
let dragItem = null;
let idOfFlag = null;
let isInDropArea = false;
let mistakes = 0;

//Touch
for (var j of images) {

  j.addEventListener("touchmove", onTouchMove);
  j.addEventListener("touchend", onTouchEnd);

  function onTouchMove(e) {
    e.preventDefault();
    j = this;
    j.style.opacity = 1;
    let touchLocation = e.targetTouches[0];
    j.style.position = "absolute";
    leftPos = j.style.left;
    topPos = j.style.top;
    j.style.left = (touchLocation.pageX - (j.width / 2)) + 'px';
    j.style.top = (touchLocation.pageY - (j.height / 2)) + 'px';
    idOfFlag = this.id;

    let dropFlagToPosition = dropFlagTo.getBoundingClientRect();

    isInDropArea = (
      (touchLocation.pageX) > dropFlagToPosition.left &&
      (touchLocation.pageX) < (dropFlagToPosition.left + j.width) &&
      (touchLocation.pageY) > dropFlagToPosition.top &&
      (touchLocation.pageY) < (dropFlagToPosition.top + j.height)
    );

    if (isInDropArea) {
      dropFlagTo.style.border = "5px dashed black";

    } else if (!isInDropArea) {
      dropFlagTo.style.border = "3px dashed #111";
    }

  }

  function onTouchEnd(e) {
    e.preventDefault;
    if (dropFlagTo.getAttribute("data-draggable-id") === idOfFlag) {
      if (isInDropArea) {
        dropFlagTo.style.border = "3px solid #111";
        dropFlagTo.append(j);
        nameOfState.style.display = "none";
      }
    } else {
      j.style.opacity = 0.8;
      mistakes += 1;
      mistakesSpan.innerHTML = mistakes;
      dropFlagTo.style.border = "3px dashed #111";
      j.style.left = leftPos;
      j.style.top = topPos;
    }
    j.style.position = "unset";
    idOfFlag = null;
    isInDropArea = false;
  }
}

//Mouse
for (var i of images) {

  i.addEventListener("dragstart", dragStart);
  i.addEventListener("dragend", dragEnd);

  function dragStart() {
    console.log(this);
    dragItem = this;
    setTimeout(() => this.style.display = "none", 0);
    idOfFlag = this.id;
  }

  function dragEnd() {
    setTimeout(() => this.style.display = "block", 0);
    dragItem = null;
    idOfFlag = null;
  }
}

dropFlagTo.addEventListener('dragover', dragOver);
dropFlagTo.addEventListener('dragenter', dragEnter);
dropFlagTo.addEventListener('dragleave', dragLeave);
dropFlagTo.addEventListener('drop', Drop);

function Drop() {
  this.style.border = "3px dashed #111";
  if (this.getAttribute("data-draggable-id") === idOfFlag) {
    this.style.border = "3px solid #111";
    console.log(this.getAttribute("data-draggable-id"));
    this.append(dragItem);
    dragItem.style.opacity = 1;
    nameOfState.style.display = "none";
  } else {
    mistakes += 1;
    mistakesSpan.innerHTML = mistakes;
  }
}

function dragOver(e) {
  e.preventDefault();
  this.style.border = "5px dashed black";
}

function dragEnter(e) {
  e.preventDefault();
  this.style.border = "3px dashed #111";
}

function dragLeave() {
  this.style.border = "3px dashed #111";
}

}
