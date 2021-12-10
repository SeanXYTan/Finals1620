toggle = document.querySelector(".toggle")

toggle.addEventListener("click", swap_themes)

function swap_themes(event) {
    listelement = document.getElementsByTagName('*')
    for (let i = 0; i < listelement.length; i++) {
        classesList = listelement[i].classList
        if (!classesList.contains('light-theme')) {
            classesList.add('light-theme')
            classesList.remove('dark-theme')
        } 
        else {
            classesList.remove('light-theme')
            classesList.add('dark-theme')
        }
    }

}