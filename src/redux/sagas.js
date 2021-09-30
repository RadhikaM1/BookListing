import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { fetchBooksSuccess, fetchBooksError } from './actions';
import Api from './api';

function* fetchBooks() {
    try {
        const { data } = yield call(Api.getBooks);
        yield put(fetchBooksSuccess(data));
    } catch(e) {
        yield put(fetchBooksError());
    }
}

function* sagas() {
    yield takeLatest('FETCH_BOOKS', fetchBooks)
}

export default sagas;
