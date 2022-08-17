//Global variables

let joke = document.getElementById('joke');
let reloadR = document.getElementById('reloadR');
let reloadC = document.getElementById('reloadC');
let home = document.getElementById('home');
let ct = document.getElementById('ct');
let choose = document.getElementById('select');

// Random joke

function getJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json())
    .then(data => {
        joke.innerHTML = data.value;
        ct.innerHTML = data.categories;
        ct.innerHTML = "Random Jokes";
        reloadR.style.display ='block'
        reloadC.style.display ='none'
    })
}
getJoke();

// Category joke

function getCategory() {
    let url ='https://api.chucknorris.io/jokes/categories';
    fetch(url)
    .then(res => res.json())
    .then(data => {
        for (var i = 0; i < data.length; i++) {
            elem = data[i];
            el = document.createElement("option");
            el.textContent = elem;
            el.value = elem;
            el.id = elem;
            select.appendChild(el);
        }
    })
}

function catJoke(category) {
    let categoryUrl = `https://api.chucknorris.io/jokes/random?category=${category}`;
    fetch(categoryUrl)
    .then(res => res.json())
    .then(data => {
        joke.innerHTML = data.value;
        ct.innerHTML = data.categories+" Jokes";
        console.log(data.url)
    })
}
document.addEventListener('DOMContentLoaded', function(){
    getCategory();

    function changeJoke(e){
        console.log(e.target.value)
        catJoke(e.target.value);
        reloadR.style.display ='none';
        reloadC.style.display ='block'
    }
    select.addEventListener('input', changeJoke);

    reloadC.addEventListener('click', function(){
        let value = select[select.selectedIndex].value;
        console.log(value)
        catJoke(value)
    })
})

//Home event listeners

home.addEventListener('click', getJoke);
reloadR.addEventListener('click', getJoke);

