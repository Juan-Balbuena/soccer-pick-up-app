import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";

function* fetchSample() {
    try {
        const sample = yield axios.get('/api/game');
        console.log('get all:', sample.data);
        yield put({ type: 'SET_SAMPLE', payload: sample.data});
    } catch (error) {
        console.log('error in fetchSample function', error);
    }
}

function* sampleSaga(){
    yield takeLatest('FETCH_SAMPLE', fetchSample);
}

export default sampleSaga;