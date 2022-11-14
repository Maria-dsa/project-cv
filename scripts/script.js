const burger = document.querySelector(".burger");
const sidebar = document.querySelector("sidebar");
const sidebarOnScreen = document.querySelector(".displaying");

//// Flags des affichages ////
const isDisplayed = {
    barOnTop: false,
    barOntopPrev: false,
    barOnSide: false,
    mobileView: true,
};

//// Cette fonction affiche le menu latéral au clic sur le burger ////
burger.addEventListener('click', function () {
    sidebar.classList.toggle("displayingLeft");
    isDisplayed.barOnSide = !isDisplayed.barOnSide;
});

////cette fonction fait disparaitre le menu après un clic sur une partie////
sidebar.addEventListener('click', function () {
    if (window.innerWidth < 768) {  //mais seulement sur petit écran (sinon la barre reste affichée)
        sidebar.classList.toggle("displayingLeft");
        isDisplayed.barOnSide = !isDisplayed.barOnSide;
    }
});


//// Cette fonction affiche (ou non) le menu du haut, et met à jour la couleur ////
function update() {

    //Verification de l'emplacement de la section about
    const about = document.querySelector('#About');
    const posAbout = about.getBoundingClientRect();

    //Verification de l'emplacement de la section pathway
    const pathway = document.querySelector('#pathway');
    const posPathway = pathway.getBoundingClientRect();

    //Verification de l'emplacement de la section skills
    const skills = document.querySelector('#skills');
    const posSkills = skills.getBoundingClientRect();

    //Verification de l'emplacement de la section contact
    const contact = document.querySelector('#contact');
    const posContact = contact.getBoundingClientRect();

    // Si on est en plein écran...
    if (window.innerWidth >= 768) {
        if (isDisplayed.mobileView == true) {
            isDisplayed.mobileView = false;
        }

        if (posAbout.top < 100 && !isDisplayed.barOnTop || posAbout.top > 100 && isDisplayed.barOnTop) {
            sidebar.classList.toggle("displaying");
            isDisplayed.barOnTop = !isDisplayed.barOnTop;
        }
        if (isDisplayed.barOnTop) {
            if (posContact.top <= 50) {
                sidebar.style.backgroundColor = "var(--secondary-color)";
            }
            else if (posSkills.top <= 10) {
                sidebar.style.backgroundColor = "var(--fourth-color)";
            }
            else if (posPathway.top <= 10) {
                sidebar.style.backgroundColor = "var(--fiveth-color)";
            }
            else if (posAbout.top <= 10) {
                sidebar.style.backgroundColor = "var(--secondary-color)";
            }
        }
    }

    //Si on est en petit écran et qu'on ne l'était pas avant
    else if (!isDisplayed.mobileView) {
        sidebar.style.backgroundColor = "var(--third-color)";
        isDisplayed.mobileView = true;
    }
}

/* 
        //J'affiche le menu si j'arrive à la section about, avec une couleur associée
        if (posAbout.top < 100 && !isDisplayed.barOnTop || posAbout.top > 100 && isDisplayed.barOnTop) {
            sidebar.classList.toggle("displaying");
            sidebar.style.backgroundColor = "var(--secondary-color)";
            isDisplayed.barOnTop = !isDisplayed.barOnTop;
            isDisplayed.about = !isDisplayed.about;
        }
 
        else if (posAbout.bottom > 100 && isDisplayed.pathway && !isDisplayed.about) {
            sidebar.style.backgroundColor = "var(--secondary-color)";
            isDisplayed.about = true;
            isDisplayed.pathway = false;
        }
 
        else if ((posPathway.top < 100 && isDisplayed.about || posPathway.bottom > 100 && isDisplayed.skills) && !isDisplayed.pathway) {
            if (isDisplayed.skills) {
                isDisplayed.skills = false;
            }
            else if (isDisplayed.about) {
                isDisplayed.about = false;
            }
            ;
            isDisplayed.pathway = true;
            sidebar.style.backgroundColor = "var(--fiveth-color)";
        }
 
        else if ((posSkills.top < 100 && isDisplayed.pathway || posSkills.bottom > 100 && isDisplayed.contact) && !isDisplayed.skills) {
            if (isDisplayed.pathway) {
                isDisplayed.pathway = false;
            }
            else if (isDisplayed.contact) {
                isDisplayed.contact = false;
            }
            ;
            isDisplayed.skills = true;
            sidebar.style.backgroundColor = "var(--fourth-color)";
        }
 
        else if ((posContact.top < 100 && isDisplayed.skills) && !isDisplayed.contact) {
            isDisplayed.skills = false;
            isDisplayed.contact = true;
            sidebar.style.backgroundColor = "var(--secondary-color)";
        }
    }
 

*/

document.addEventListener('resize', update);
document.addEventListener('scroll', update);
update();



//// Cette fonction affiche les bulles ////
const bulle1 = document.querySelector(".panel1");
const bulle2 = document.querySelector(".panel2");
const bulle3 = document.querySelector(".panel3");
const bulle4 = document.querySelector(".panel4");

let observer1 = new IntersectionObserver(function (entries) {
    if (entries[0]['isIntersecting'] === true && entries[0]['intersectionRatio'] > 0.20) {
        //console.log('Bulle1 affichée');
        bulle1.style.opacity = "1";
        bulle1.style.marginLeft = "12rem";
    }
    else {
        //console.log('Bulle1 cachée');
        bulle1.style.opacity = "0";
        bulle1.style.marginLeft = "-3rem";
    }
}, { threshold: [0, 0.20] });

let observer2 = new IntersectionObserver(function (entries) {
    if (entries[0]['isIntersecting'] === true && entries[0]['intersectionRatio'] > 0.20) {
        //console.log('Bulle2 affichée');
        bulle2.style.opacity = "1";
        bulle2.style.marginLeft = "12rem";
    }
    else {
        //console.log('Bulle2 cachée');
        bulle2.style.opacity = "0";
        bulle2.style.marginLeft = "-3rem";
    }
}, { threshold: [0, 0.20] });

let observer3 = new IntersectionObserver(function (entries) {
    if (entries[0]['isIntersecting'] === true && entries[0]['intersectionRatio'] > 0.20) {
        //console.log('Bulle3 affichée');
        bulle3.style.opacity = "1";
        bulle3.style.marginLeft = "12rem";
    }
    else {
        //console.log('Bulle3 cachée');
        bulle3.style.opacity = "0";
        bulle3.style.marginLeft = "-3rem";
    }
}, { threshold: [0, 0.20] });

let observer4 = new IntersectionObserver(function (entries) {
    if (entries[0]['isIntersecting'] === true && entries[0]['intersectionRatio'] > 0.20) {
        //console.log('Bulle4 affichée');
        bulle4.style.opacity = "1";
        bulle4.style.marginLeft = "12rem";
    }
    else {
        //console.log('Bulle4 cachée');
        bulle4.style.opacity = "0";
        bulle4.style.marginLeft = "-3rem";
    }
}, { threshold: [0, 0.20] });


observer1.observe(document.querySelector(".panel1"));
observer2.observe(document.querySelector(".panel2"));
observer3.observe(document.querySelector(".panel3"));
observer4.observe(document.querySelector(".panel4"));