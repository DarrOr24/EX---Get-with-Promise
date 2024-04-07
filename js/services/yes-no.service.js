'use strict'

function getAns() {
    // $.get('https://yesno.wtf/api', onSuccess)
    return axios.get('https://yesno.wtf/api')
        .then(res => res.data)
        .catch(err => {
            console.log(err)
            throw 'Sonething went wrong.. try agin later'
        })
}

function isValid (quest){
    const size = quest.length
    if(quest.length < 4 || quest.charAt(size-1)!=='?') {
        alert('Question must be at least 3 letters long and end with a ?')
        return false
    }
    else return true
}

function getDog() {
    // $.get('https://dog.ceo/api/breeds/image/random', onSuccess)
    return axios.get('https://dog.ceo/api/breeds/image/random')
        .then(res => res.data)
        .catch(err => {
            console.log(err)
            throw 'Sonething went wrong.. try agin later'
        })
}

function getJoke() {
    // $.get('https://api.chucknorris.io/jokes/random', onSuccess)
    return axios.get('https://api.chucknorris.io/jokes/random')
        .then(res => res.data)
        .catch(err => {
            console.log(err)
            throw 'Sonething went wrong.. try agin later'
        })
}

