const gameDetailsReducer = (state = {}, action) => {
    if (action.type === 'GET_DETAILS') {
        return action.payload;
    } return state;
};

export default gameDetailsReducer;