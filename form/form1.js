const signupbtn = document.querySelector('#signup');
const signinbtn = document.querySelector('#signin');
const container1 = document.querySelector('#sign1');
const container2 = document.querySelector('#sign2');
const container3 = document.querySelector('#signin-tab');
const container4 = document.querySelector('#signup-tab');

signupbtn.addEventListener('click', () => {
    container1.classList.add("zindex1")
    // container2.classList.add("zindex2")

    container4.classList.add("move1")
    container3.classList.add("move2")
    container3.classList.add("opaopa1")
    container4.classList.add("opaopa0")
});

signinbtn.addEventListener('click', () => {
    container1.classList.remove("zindex1")
    container1.classList.add("zindex2")
    container1.classList.remove("zindex2")
    // container2.classList.remove("zindex2")
    // container2.classList.add("zindex1")
    // container2.classList.remove("zindex1")

    container4.classList.remove("move1")
    container4.classList.add("move2")
    container4.classList.remove("move2")
    container3.classList.remove("move2")
    container3.classList.add("move1")
    container3.classList.remove("move1")

    container3.classList.remove("opaopa1")
    container3.classList.add("opaopa0")
    container3.classList.remove("opaopa0")
    container4.classList.remove("opaopa0")
    container4.classList.add("opaopa1")
    container4.classList.remove("opaopa1")
});