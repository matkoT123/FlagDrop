let flagContainer = document.getElementById("flagContainer");
let images = document.querySelectorAll(".flags");
let selectedImage = null;

flagContainer.addEventListener("mousedown", onMouseDown);
flagContainer.addEventListener("mousemove", onMouseMove);
flagContainer.addEventListener("mouseup", onMouseUp);

function addEventListeners() {


}

function onMouseDown(evt) {
    // console.log('onMouseDown');
    selectedImage = getPressedImage(evt);
    //  console.log(selectedImage);
    if (selectedImage != null) {
        console.log("som tu");
        selectedImage.offset = {
            x: evt.x - selectedImage.getBoundingClientRect().x,
            y: evt.y - selectedImage.getBoundingClientRect().y
        }
    }
}

function onMouseMove(evt) {
    console.log('onMouseMove');
    if (selectedImage != null) {
        selectedImage.x = evt.x - selectedImage.offset.x;
        selectedImage.y = evt.y - selectedImage.offset.y;
    }
}

function onMouseUp(evt) {
    selectedImage = null;
}

// script.js:43 911
// script.js:43 1263
// script.js:43 1615
// script.js:43 1967

function getPressedImage(loc) {
    let pressImage = null;
    images.forEach(elem => {

        let xOFElem = elem.getBoundingClientRect().x;
        let yOfElem = elem.getBoundingClientRect().y;

        if (loc.x > xOFElem && loc.x < xOFElem + elem.width &&
            loc.y > yOfElem && loc.y < yOfElem + elem.height) {
            pressImage = elem;

        }
    });

    return pressImage;
}


const arg = document.getElementById("argentina");

//  console.log(arg.compareDocumentPosition())

// images.forEach(elem => {
//     console.log(elem.offset);
//  });



// window.onload = function () {
//   //select the thing we wanna drag
//   var mustachio = document.getElementById('gif');
//   //listen to the touchmove event, every time it fires, grab the location of the touch
//   //then assign it to mustachio
//   mustachio.addEventListener('touchmove', function (ev) {
//       //grab the location of the touch
//       var touchLocation = ev.targetTouches[0];
//       //assign mustachio new coordinates based on the touch
//       mustachio.style.left = touchLocation.pageX + 'px';
//       mustachio.style.top = touchLocation.pageY + 'px';
//   })
//   mustachio.addEventListener('touchend', function (ev) {
//       //current mustachio position when dropped
//       var x = parseInt(mustachio.style.left);
//       var y = parseInt(mustachio.style.top);
//       //check to see if that position meets our constraints
//       if (x < 388 || x > 646) {
//           mustachio.style.left = '450px';
//           mustachio.style.top = '175px';
//       }
//       if (y < 100 || y > 356) {
//           mustachio.style.left = '450px';
//           mustachio.style.top = '175px';
//       }
//   })
// }
