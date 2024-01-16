import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";

function* fetchGames() {
    try {
        const sample = yield axios.get('/api/game');
        console.log('get all:', sample.data);
        yield put({ type: 'SET_GAMES', payload: sample.data});
    } catch (error) {
        console.log('error in fetchGame function', error);
    }
}

function* gameSaga(){
    yield takeLatest('FETCH_GAMES', fetchGames);
}

export default gameSaga;