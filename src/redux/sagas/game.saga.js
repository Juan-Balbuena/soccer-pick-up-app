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

function* removeGame(action){
    try {
        yield axios.delete(`/api/game/${action.payload}`);
        yield put({type: 'FETCH_GAMES'});
    } catch(error){
        console.log('error in deleting route', error);
        alert('Something went wrong');
    };
};

function* editGame(action){
    try{
        yield axios.put(`/api/game/${action.payload}`);
        yield put({type: 'FETCH_GAMES'});
    } catch(error){
        console.log('error in put route', error);
        alert('Something went wrong');
    };
};

function* gameSaga(){
    yield takeLatest('FETCH_GAMES', fetchGames);
    yield takeLatest('REMOVE_GAME', removeGame);
    yield takeLatest('EDIT_GAME', editGame)
}

export default gameSaga;