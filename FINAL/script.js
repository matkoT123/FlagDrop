let flagContainer = document.getElementById("flagContainer");
let images = document.querySelectorAll(".flags");
let dropFlagTo = document.getElementById("argentinaDrop");
let nameOfState = document.getElementById("span");
let dragItem = null;
let touchItem = null;
let idOfFlag = null;
let isInDropArea = false;

//Touch
for (var j of images) {

  j.addEventListener("touchmove", onTouchMove);
  j.addEventListener("touchend", onTouchEnd);

  function onTouchMove(e) {
    e.preventDefault();
    j = this;
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
    nameOfState.style.display = "none";
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