const BASE_URL = "https://api.thecatapi.com/v1"
const API_KEY = "live_y3xAqBOiOwneoXZwituWt1KndmaR6fVOc2MoPBYwebarG19ECflM5obP5Kj9tNxT";

function fetchBreeds() {
    return fetch(`${BASE_URL}/breeds`).then(response => {
        if (!response.ok) {
            throw new Error('error in fetchBreeds', response.statusText)
        }
        return response.json()
    })
}

function fetchCatByBreed(id) {
    return fetch(`${BASE_URL}/images/search?breed_ids=${id}&api_key=${API_KEY}`).then(response => {
        if (!response.ok) {
            throw new Error('error in fetchCatByBreed', response.statusText)
        }
        return response.json()
    })
}

export {fetchBreeds, fetchCatByBreed}