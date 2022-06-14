const carouselContainer = document.getElementsByClassName('carousel-container')[0];
const carouselImageWrapper = document.getElementsByClassName('carousel-image-wrapper')[0];

const images = carouselImageWrapper.children;
const numberOfImages = images.length;
for (let i = 0; i < numberOfImages; i++) {
    images[i].style.left = `${i * 100}%`
}

//Creation of dots
var dotContainer = document.createElement('div');
dotContainer.setAttribute('class', 'dot-container');

for (let i = 0; i < numberOfImages; i++) {
    var dot = document.createElement("div");
    dot.setAttribute('id', `dot-${i}`);
    dotContainer.appendChild(dot);
}

carouselContainer.appendChild(dotContainer);
const dots = dotContainer.children;

let imageIndex = 0;
dotContainer.children[imageIndex].classList.add('active');


//Listenting to right arrow click
var rightArrow = document.createElement('div');
rightArrow.setAttribute('class', 'arrow-right');
carouselContainer.appendChild(rightArrow);

rightArrow.addEventListener('click', () => {
    imageIndex = imageIndex % numberOfImages;
    rightSlide();
    imageIndex++;
    checkActive(imageIndex);
});


//Listening to left arrow click
var leftArrow = document.createElement('div');
leftArrow.setAttribute('class', 'arrow-left');
carouselContainer.appendChild(leftArrow);

leftArrow.addEventListener('click', () => {
    imageIndex = imageIndex % numberOfImages;
    leftSlide();
    imageIndex--;
    checkActive(imageIndex);
});

function dotsEventListener() {
    for (let i = 0; i < numberOfImages; i++) {
        dots[i].addEventListener('click', (index) => {
            for (let j = 0; j < numberOfImages; j++) {
                if (dots[j].id === index.target.id) {
                    slide(j);
                    imageIndex = j;
                    dots[j].classList.add('active');
                }
                else {
                    dots[j].classList.remove('active');
                }
            }
        });
    }
}



function animationSlide() {
    setInterval(() => {
        index = (imageIndex + 1) % numberOfImages;
        slide(index);
        imageIndex++;
        imageIndex = imageIndex % numberOfImages;
    }, 4000);
}

function main() {
    animationSlide();
    dotsEventListener();
}

main();