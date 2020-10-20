const initState = {
}

const emailReducer = (state = initState, action) => {
    switch(action.type) {
        case 'MESSAGE_SENT' :
            console.log('Message sent', action);
            return {
                ...state,
                msgSent: true
            }
        case 'MESSAGE_ERROR' :
            console.log('LastTime upd err', action.err);
            return {
                ...state,
                msgError: true
            }
        default :
            return state;
    }
}

export default emailReducer;