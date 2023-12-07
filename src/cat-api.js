<<<<<<< HEAD
const BASE_URL = "https://api.thecatapi.com/v1"
const API_KEY = "live_y3xAqBOiOwneoXZwituWt1KndmaR6fVOc2MoPBYwebarG19ECflM5obP5Kj9tNxT";

function fetchBreeds() {
    return fetch(`${BASE_URL}/breeds`).then(response => {
=======
import Notiflix from 'notiflix'
const API_KEY = "live_y3xAqBOiOwneoXZwituWt1KndmaR6fVOc2MoPBYwebarG19ECflM5obP5Kj9tNxT";
const container = document.querySelector('.cat-info')
const select = document.querySelector('.breed-select')
const loadMsg = document.querySelector('.loader')

function fetchBreeds() {
    return fetch(`https://api.thecatapi.com/v1/breeds`).then(response => {
>>>>>>> bd1f84d0fc5f5d752721ef04bd95d7b1ca0973bb
        if (!response.ok) {
            throw new Error('error in fetchBreeds', response.statusText)
        }
        return response.json()
    })
}

function fetchCatByBreed(id) {
<<<<<<< HEAD
    return fetch(`${BASE_URL}/images/search?breed_ids=${id}&api_key=${API_KEY}`).then(response => {
=======
    return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${id}&api_key=${API_KEY}`).then(response => {
    loadMsg.style.display="block"
>>>>>>> bd1f84d0fc5f5d752721ef04bd95d7b1ca0973bb
        if (!response.ok) {
            throw new Error('error in fetchCatByBreed', response.statusText)
        }
        return response.json()
    })
}

export {fetchBreeds, fetchCatByBreed}