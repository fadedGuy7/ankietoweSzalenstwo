const initState = {
}

const otherReducer = (state = initState, action) => {
    switch(action.type) {
        case 'LASTTIME_UPDATE_SUCCESS' :
            console.log('LastTIme updated suc', action.photo);
            return state;
        case 'LASTTIME_UPDATE_ERROR' :
            console.log('LastTime upd err', action.err);
            return state;
        case 'REGLVL_UPDATED' :
            console.log('user reg lvl suc', action.lvl);
            return state;
        case 'REGLVL_ERROR' :
            console.log('user reg lvl error', action.err);
            return state;
        default :
            return state;
    }
}

export default otherReducer;