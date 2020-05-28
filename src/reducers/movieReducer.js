export default (state = {}, action) => {
    switch (action.type) {
        case 'MOVIE_ACTION':
            return {
                result: action.payload
            }
        case 'ADD_MOVIE_DETAIL':
            //console.log("ADDMOVIEREDUCER", action)
            return {
                //...state,
                //movieDetail: [...state.movieDetail]
                movieDetail: action.payload
            }
        case 'REMOVE_MOVIE_DETAIL':
            //console.log("ADDMOVIEREDUCER", action)
            return {
                //...state,
                //movieDetail: [...state.movieDetail]
                movieDetail: action.payload
            }
        case 'MOVIE_LIST':
            //console.log("ADDMOVIEREDUCER", action)
            return {
                //...state,
                //movieDetail: [...state.movieDetail]
                movieList: action.payload
            }

        default:
            return state
    }
}
