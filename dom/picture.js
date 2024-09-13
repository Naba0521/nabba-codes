const images = document.querySelectorAll('.img-container>img');
const btnPre = document.querySelector('.btn1');
const btnNext = document.querySelector('.btn2');
const indi = document.querySelectorAll('.circle-container>.circle');
const imagecontainer = document.querySelector('.img-container');

let index = 0;

function showImage(index) {
    images.forEach((img, i) => {
        if (i === index) {
            img.style.transform = 'translateX(0)';
        } else if (i < index) {
            img.style.transform = 'translateX(-400px)';
        } else {
            img.style.transform = 'translateX(400px)';
        }
    });
}
function showIndi(index) {
    indi.forEach((circle, i) => {
        if (i === index) {
            circle.style.backgroundColor = "aqua";
        } else {
            circle.style.backgroundColor = "grey";
        }
    });
}
btnNext.addEventListener('click', () => {
    if (index < images.length - 1) {
        index++;
    } else {
        index = 0
    }
    showImage(index);
    showIndi(index)
});

btnPre.addEventListener('click', () => {
    if (index > 0) {
        index--;
    } else {
        index = images.length - 1
    }
    showImage(index);
    showIndi(index)
});
