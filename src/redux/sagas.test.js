import { runSaga } from 'redux-saga';
import api from './api';

import { fetchBooksSuccess, fetchBooksError } from './actions';
import fetchBooksSaga from './sagas';

describe('fetchBooksApiRequest', () => {
    it('should call api and dispatch success action', async () => {
        const dummyBooks = { items: [{ volumeInfo: { imageLinks: { smallThumbnail: 'small thumbnail', thumbnail: 'thumbnail'}, title: 'title', subtitle: 'subtitle' }, id: 'uu123ui'}] };
        const fetchBooks = jest.spyOn(api, 'getBooks').mockImplementation(() => Promise.resolve(dummyBooks));
        const dispatched = [];
        const result = await runSaga({
            dispatch: (action) => dispatched.push(action),
        }, fetchBooksSaga);

        expect(fetchBooks).toHaveBeenCalledTimes(1);
        expect(dispatched).toEqual([fetchBooksSuccess(dummyBooks)]);
        fetchBooks.mockClear();
    });

    it('should call api and dispatch error action', async () => {
        const fetchBooks = jest.spyOn(api, 'getBooks').mockImplementation(() => Promise.reject());
        const dispatched = [];
        const result = await runSaga({
            dispatch: (action) => dispatched.push(action),
        }, fetchBooksSaga);

        expect(fetchBooks).toHaveBeenCalledTimes(1);
        expect(dispatched).toEqual([fetchBooksError()]);
        fetchBooks.mockClear();
    });
});
