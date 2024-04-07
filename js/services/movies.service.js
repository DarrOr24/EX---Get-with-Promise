'use strict'

var gCacheGenres = loadFromStorage('genresCache')
var gCacheMovies = loadFromStorage('moviesCache') || {}

function getGenres() {
    if(gCacheGenres) return Promise.resolve(gCacheGenres)

    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=43b2712ec9502986912ef9345a0766e7 `
	
    return axios.get(url)
        .then(res => {
            gCacheGenres = res.data.genres
            saveToStorage('genresCache', gCacheGenres)
            return res.data.genres
        })
}

function getMovies(id){
    if(gCacheMovies[id]) return Promise.resolve(gCacheMovies[id])

    const url = `https://api.themoviedb.org/3/discover/movie?api_key=43b2712ec9502986912ef9345a0766e7&with_genres=${id}`
    return axios.get(url)
        .then(res => {
            const data = res.data.results.map(result => {
                            const image = `https://image.tmdb.org/t/p/w500` + result.poster_path 
                            return {
                                title: result.title,
                                overview: result.overview,
                                image,
                            }
                        })
            gCacheMovies[id] = data
            saveToStorage('moviesCache', gCacheMovies)
            return data
        })
}