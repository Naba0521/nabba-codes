const signupbtn = document.querySelector('#signup');
const signinbtn = document.querySelector('#signin');
const container1 = document.querySelector('.container');
const container2 = document.querySelector('.container2');

signupbtn.addEventListener('click', () => {
    container1.classList.add("zindex1")
    container1.classList.remove("zindex1")
    container2.classList.add("zindex2")
});

signinbtn.addEventListener('click', () => {
    container1.classList.add("zindex2")
    container2.classList.remove("zindex2")
    container2.classList.add("zindex1")
});