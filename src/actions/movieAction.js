export const movieAction = () => dispatch => {
    dispatch({
        type: 'MOVIE_ACTION',
        payload: 'result_of_movie_action'
    })
}

export const addMovieDetail = (movieDetail) => dispatch => {
    //console.log("ACTION",movieDetail)
    dispatch({
        type: "ADD_MOVIE_DETAIL",
        payload:  {...movieDetail}
    })
}

export const removeMovieDetail = () => dispatch => {
    dispatch({
        type: "REMOVE_MOVIE_DETAIL",
        payload:  null
    })
}

export const movieList = (movies) => dispatch => {
    dispatch({
        type: "MOVIE_LIST",
        payload:  {...movies}
    })
}



