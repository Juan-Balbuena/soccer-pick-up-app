import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";

function* fetchGame(){
    try {
        yield axios.post('/api/game')
        const addGame = yield axios.get('/api/game')
        console.log('get all:', addGame.data);
        yield put({ type: 'SET_GAME', payload: addGame.data});
    } catch (error) {
        console.log('error in fetchGame function', error);
    }
}

function* addGameSaga(){
    yield takeLatest('FETCH_GAME', fetchGame)
}

export default addGameSaga;