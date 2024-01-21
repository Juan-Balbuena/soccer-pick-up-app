const editGame = (state = [], action) => {
    switch (action.type){
        case 'SET_GAME_DETAILS':
            return action.payload;
        case 'TYPING_NEW_GAME':
            return { ...state, ...action.payload }
        default: 
            return state           
    }
}

export default editGame;