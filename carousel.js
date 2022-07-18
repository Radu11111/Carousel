
const IMAGES = [        //type-Array
    "images/1-800x600.jpg", //0
    "images/2-800x600.jpg", // 1
    "images/3-800x600.jpg",  //2
]
//HW1: WHAT IS CONST AND WHY CAPS? --DONE
//Const este o variabilă constantă a cărei valoare nu poate fi modificată prin reatribuire.(valoarei ei nu poate fi schimbată).
//Denumirea variabilei prefixate prin const se scrie cu majuscule,în cazul când valoarea variabilei este
//atribuită și cunoscută înainte de executarea cărorva operații cu variabila date.De aceea constantele :IMAGES,TITLES,EFFECTS din exemplul dat
//sunt scrise cu majuscule.

//Start/current slide

const TITLES = [
    "Foggy morning",
    " Sunny City",
    "Furious Waves",
]

let currentIndex = 0

const EFFECTS = [
    "animate__bounceInLeft",
    "animate__bounceInRight",
    "animate__fadeInLeft",
    "animate__fadeInRight"
]

const EFFECT = [
    "animate__swing",
    "animate__heartBeat",
    "animate__wobble"
]
function action() {
    switch(event.key) {
        case "ArrowLeft" :
         prev();break
        case "ArrowRight":
        next();break 
    }
}

function showImage(n) {
    let i = Math.round(Math.random() * 3)

    carouselTitles.innerHTML =
        `<img 
    src ="${IMAGES[n]}" class="animate__animated ${EFFECTS[i]}"/>`
}

function showTitle(n) {
    let e = Math.round(Math.random() * 3)

    carouselSlides.innerHTML =
     `<h4 class="animate__animated ${EFFECT[e]}">${TITLES[n]} </h4>`
        
}

function showIndicators(n) {
    carouselIndicators.innerHTML = ``
    for(let i = 0; i<IMAGES.length;i++) {
        if(i == n) {
            carouselIndicators.innerHTML += `+ `
        }else {
            carouselIndicators.innerHTML += ` - `
        }

    }
}
function prev() {
    if (currentIndex > IMAGES.length - 3) {
    currentIndex --
    showImage(currentIndex)
    showTitle(currentIndex)
    showIndicators(currentIndex)
    }
}
function next() {
    //hw2: boundaries/limits- if/else -DONE
    //hw3*:optimize this 2 lines
    if(currentIndex < IMAGES.length-1)  {
    currentIndex++
    showImage(currentIndex)
    showTitle(currentIndex)
    showIndicators(currentIndex)
    }
}
//hw4:create prev() function-Done
showImage(currentIndex)
showTitle(currentIndex)
showIndicators(currentIndex)

function play() {
    setInterval(next ,3000)
}