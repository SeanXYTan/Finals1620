const toggle = document.querySelector(".toggle");
const submitbtn = document.querySelector("#frm-btn");

toggle.addEventListener("click", swap_themes);

function swap_themes() {
    listelement = document.getElementsByTagName('*');
    for (let i = 0; i < listelement.length; i++) {
        classesList = listelement[i].classList
        if (!classesList.contains('light-theme')) {
            classesList.add('light-theme')
            classesList.remove('dark-theme')
        }
        else {
            classesList.remove('light-theme')
            classesList.add('dark-theme')
        };
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