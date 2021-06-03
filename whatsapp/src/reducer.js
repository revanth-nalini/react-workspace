export const initialState = {
    user : null
};

export const actionTypes = {    
    SET_USER : "SET_USER"
}

const reducer = (state, action) =>{     // listener - push info into data layer
    switch(action.type){
        case actionTypes.SET_USER:
            return{
                ...state,   // ... keep whatever is there as it is
                user:action.user
            };
        default:
            return state;
    }
}

export default reducer;