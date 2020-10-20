const initState = {
}

const companyReducer = (state = initState, action) => {
    switch(action.type) {
        case 'ADD_COMPANY' :
            console.log('Add company', action.photo);
            return state;
        case 'ADD_COMPANY_ERROR' :
            console.log('Add company error', action.err);
            return state;
        default :
            return state;
    }
}

export default companyReducer;