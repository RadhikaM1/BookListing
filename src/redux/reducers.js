const initialState = {
    books: {},
    booksError: '',
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_BOOKS_SUCCESS': {
            return {
                ...state,
                books: action.books,
            };
        }
        case 'FETCH_BOOKS_ERROR': {
            return {
                ...state,
                booksError: 'Cannot fetch books',
            }
        }
        default:
            return state;
    }
}

export default reducer;
