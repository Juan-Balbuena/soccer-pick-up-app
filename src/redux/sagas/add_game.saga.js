import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";

function* fetchGame(){
    try {
        const addGame = yield axios.post('/api/game')
        console.log('get all:', addGame.data);
    } catch (error) {
        console.log('error in fetchGame function', error);
    }
}

function* addGameSaga(){
    yield takeLatest('FETCH_GAME', fetchGame)
}

export default addGameSaga;