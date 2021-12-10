const toggle = document.querySelector(".toggle");
const submitbtn = document.querySelector("#frm-btn");

toggle.addEventListener("click", swap_themes);

function swap_themes() {
    listelement = document.getElementsByTagName('body');
    elementclass = listelement[0].classList;
    if (!elementclass.contains('light-theme')) {
        elementclass.add('light-theme')
        elementclass.remove('dark-theme')
    }
    else {
        elementclass.remove('light-theme')
        elementclass.add('dark-theme')
    };
};

submitbtn.addEventListener('click', submit_form);

function submit_form () {
    let new_object = {
        email: document.querySelector('#email').value,
        name: document.querySelector('#name').value,
        message: document.querySelector('#msg').value
    };
    console.log(new_object);
};