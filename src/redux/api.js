import axios from 'axios';

export default {
    getBooks: () => axios.get('https://www.googleapis.com/books/v1/volumes?filter=free-ebooks&q=a'),
};
