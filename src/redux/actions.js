export const fetchBooks = () => ({
    type: 'FETCH_BOOKS',
});

export const fetchBooksSuccess = (payload) => ({
    type: 'FETCH_BOOKS_SUCCESS',
    books: payload,
});

export const fetchBooksError = () => ({
    type: 'FETCH_BOOKS_ERROR',
});
