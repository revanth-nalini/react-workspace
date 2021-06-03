export const initialState = {
    user : null,
    // token : 'BQAZDmsU9CAJnIrkbqCnFzUfJPzz-0s_naFn9Znkejj7BLHKKQPxgVGiT3wpUnzz_VF7zp3mOxof8ugxKaUzL_1OZbmkEV5JBXxBddwF5zHopeZqnGD5MfNZ4cgJre52ge_WuRXDahsd3T2rmQdz1LIaLNnRKeqZCPk',
    playlists : [],
    playing: false,
    item: null,
    discover_weekly: null
};


// reducer sits and listens to actions
// whenever push an action is dispatched. it has type and [payload]
const reducer = (state, action)=>{
    switch(action.type){
        case 'SET_USER' : 
            return {
                ...state,   // ... keep whatever is in current state
                user: action.user  
            }
        case 'SET_TOKEN' :
            return {
                ...state,
                token: action.token
            }
        case 'SET_PLAYLISTS' : 
            return {
                ...state,
                playlists : action.playlists
            }
        case 'SET_DISCOVER_WEEKLY' :
             return{
                 ...state,
                 discover_weekly: action.discover_weekly
             }
        default:
            return state;
    }
}

export default reducer;