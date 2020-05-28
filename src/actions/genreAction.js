export const movieGenres = (genres) => dispatch => {
    //console.log("ACTION",movieDetail)
    dispatch({
        type: "ALL_GENRES",
        payload:  genres
    })
}

export const selectedGenre = (genreId) => dispatch => {
    //console.log("ACTION",movieDetail)
    dispatch({
        type: "SELECTED_GENRE",
        payload:  genreId
    })
}