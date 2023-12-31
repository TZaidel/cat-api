import Notiflix from 'notiflix'
import SlimSelect from 'slim-select'
import {fetchBreeds, fetchCatByBreed} from './cat-api.js'
import 'slim-select/dist/slimselect.css';
const container = document.querySelector('.cat-info')
const select = document.querySelector('.breed-select')
const loadMsg = document.querySelector('.loader')
select.addEventListener("change", onChange)

fetchBreeds()
    .then(response => {
        loadMsg.style.display="none"
        select.insertAdjacentHTML("beforeend", createOptions(response))
        new SlimSelect({
            select: '#single'
        })
    })
    .catch(error => {
        loadMsg.style.display="none"
        Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!')
    })


function createOptions(value) {
    return value.map(({ id, name }) => {
        return `<option value="${id}">${name}</option>`
    }).join('')
}


function onChange(event) {  
    loadMsg.style.display ="block"
    const selectedId = this.value
    select.style.display = "none"
    container.innerHTML = ""
    fetchCatByBreed(selectedId)
        .then(cat => {
            loadMsg.style.display = "none"
            container.innerHTML=createArticle(cat)
        })
        .catch(error => {
            Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!')
        })
}

function createArticle(cat) {
    return `<div class="cat-card">
        <img width="300" src ="${cat[0].url}">
        <h2>${cat[0].breeds[0].name}</h2>
        <p>${cat[0].breeds[0].description}</p>
        <p>${cat[0].breeds[0].temperament}</p>
        </div>`
}


