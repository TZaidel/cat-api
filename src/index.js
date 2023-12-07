<<<<<<< HEAD
=======
import axios from "axios";
>>>>>>> bd1f84d0fc5f5d752721ef04bd95d7b1ca0973bb
import Notiflix from 'notiflix'
import SlimSelect from 'slim-select'
import {fetchBreeds, fetchCatByBreed} from './cat-api.js'

const container = document.querySelector('.cat-info')
const select = document.querySelector('.breed-select')
const loadMsg = document.querySelector('.loader')

select.addEventListener("change", onChange)
<<<<<<< HEAD
    select.style.display = "none"
=======
// new SlimSelect({
//   select: '#single'
// })

const API_KEY= "live_y3xAqBOiOwneoXZwituWt1KndmaR6fVOc2MoPBYwebarG19ECflM5obP5Kj9tNxT";
>>>>>>> bd1f84d0fc5f5d752721ef04bd95d7b1ca0973bb


fetchBreeds()
    .then(response => {
<<<<<<< HEAD
        select.style.display = "block"
        loadMsg.style.display="none"
        select.insertAdjacentHTML("beforeend", createOptions(response))
        new SlimSelect({
            select: select
        })
=======
        loadMsg.style.display="none"
        select.insertAdjacentHTML("beforeend", createOptions(response))
>>>>>>> bd1f84d0fc5f5d752721ef04bd95d7b1ca0973bb
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
<<<<<<< HEAD
    loadMsg.style.display ="block"
    const selectedId = this.value
    select.style.display = "none"
    container.innerHTML = ""
    fetchCatByBreed(selectedId)
        .then(cat => {
            loadMsg.style.display = "none"
            // select.style.display = "block"
            new SlimSelect({
                select: select
            })
=======
     loadMsg.style.display ="block"
    const selectedId = this.value
    fetchCatByBreed(selectedId)
        .then(cat => {
            loadMsg.style.display ="none"
>>>>>>> bd1f84d0fc5f5d752721ef04bd95d7b1ca0973bb
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


