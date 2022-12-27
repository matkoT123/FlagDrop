let flagContainer = document.getElementById("flagContainer");
let images = document.querySelectorAll(".flags");
let selectedImage = null;

flagContainer.addEventListener("mousedown", onMouseDown);
// flagContainer.addEventListener("mousemove", onMouseMove);
flagContainer.addEventListener("mouseup", onMouseUp);

function addEventListeners() {
    
    
}

function onMouseDown(evt) {
    console.log('onMouseDown');
    selectedImage=getPressedImage(evt);
    console.log(selectedImage);
    if(selectedImage != null) {
        selectedImage.offset={
            x:evt.x-selectedImage.x,
            y:evt.y-selectedImage.y
        }
    }
}

function onMouseMove(evt) {
    console.log('onMouseMove');
    if(selectedImage != null) {}
    selectedImage.x=evt.x-selectedImage.offset.x;
    selectedImage.y=evt.y-selectedImage.offset.y;
}

function onMouseUp(evt) {
    selectedImage=null;
}

function getPressedImage(loc) {
    images.forEach(elem => {
        cons
       if(loc.x>elem.x && loc.x<elem.x+elem.width &&
            loc.y>elem.y && loc.y<elem.y+elem.height) {
                return elem;
            }
    });
    return null;
}

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
