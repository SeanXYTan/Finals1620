const toggle = document.querySelector(".toggle");
const submitbtn = document.querySelector("#frm-btn");

toggle.addEventListener("click", swap_themes);

function swap_themes() {
    listelement = document.getElementsByTagName('body');
    console.log(listelement)
    for (let i = 0; i < listelement.length; i++) {
        listelement = listelement[i].classList
        if (!listelement.contains('light-theme')) {
            listelement.add('light-theme')
            listelement.remove('dark-theme')
        }
        else {
            listelement.remove('light-theme')
            listelement.add('dark-theme')
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