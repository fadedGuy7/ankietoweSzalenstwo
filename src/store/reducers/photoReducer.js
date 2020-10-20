const initState = {
}

const photoReducer = (state = initState, action) => {
    switch(action.type) {
        case 'ADD_PHOTO' :
            console.log('Add photo', action.photo);
            return state;
        case 'ADD_PHOTO_ERROR' :
            console.log('Add photo error', action.err);
            return state;
        default :
            return state;
    }
}

export default photoReducer;