export default (state = {}, action) => {
    switch (action.type) {

        case 'ALL_GENRES':
            return {
                //...state,
                movieGenres: action.payload
            }
        case 'SELECTED_GENRE':
            return {
                //...state,
                selectedGenre: action.payload
            }
        default:
            return state
    }
}
