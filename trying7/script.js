let flagContainer = document.getElementById("flagContainer");
let images = document.querySelectorAll(".flags");
let dropFlagTo = document.getElementById("argentinaDrop");
let nameOfState = document.getElementById("span");
let dragItem = null;
let idOfFlag = null;

//Touch
//TouchScreen
flagContainer.addEventListener("touchmove", onTouchMove);
flagContainer.addEventListener("touchend", onTouchEnd);

function onTouchMove(e) {
    var touchLocation = e.targetTouches[0];
    selectedImage = getTouchImage(touchLocation);
    if (selectedImage != null) {
        console.log(images);
        selectedImage.style.position = "absolute";
        leftPos = selectedImage.style.left;
        topPos = selectedImage.style.top;
        selectedImage.style.left = (touchLocation.pageX - (selectedImage.width / 2)) + 'px';
        selectedImage.style.top = (touchLocation.pageY - (selectedImage.height / 2)) + 'px';
    }
}

function onTouchEnd(e) {
    if (selectedImage != null) {
        e.preventDefault;
        console.log("tu som ty picus");
        selectedImage.style.position = "unset";
        // selectedImage.parent.style.position = "unset";
        // selectedImage.style.left = leftPos;
        // selectedImage.style.top = topPos;
    }
    selectedImage = null;

}

function getTouchImage(loc) {
    console.log("tu som");
    let touchImage = null;
    images.forEach(elem => {
        let xOFElem = elem.getBoundingClientRect().x;
        let yOfElem = elem.getBoundingClientRect().y;

        if (loc.pageX > xOFElem && loc.pageX < xOFElem + elem.width &&
            loc.pageY > yOfElem && loc.pageY < yOfElem + elem.height) {
            touchImage = elem;
        }
    });

    return touchImage;
}

//Mouse
for(var i of images) {
    i.addEventListener("dragstart", dragStart);
    i.addEventListener("dragend", dragEnd);

    function dragStart() {
        dragItem = this;
        setTimeout(()=>this.style.display = "none", 0);
        idOfFlag = this.id;
    }

    function dragEnd() {
        setTimeout(()=>this.style.display = "block", 0);
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
    console.log(this.getAttribute("data-draggable-id"));
    console.log(idOfFlag);
    if(this.getAttribute("data-draggable-id") === idOfFlag) {
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

