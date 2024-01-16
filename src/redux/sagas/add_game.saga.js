import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";

function* addGame(action){
    try {
        yield axios.post('/api/game', action.payload)
        yield put({ type: 'FETCH_GAMES' });
    } catch (error) {
        console.log('error in addGame function', error);
    }
}

function* addGameSaga(){
    yield takeLatest('ADD_GAME', addGame)
}

export default addGameSaga;