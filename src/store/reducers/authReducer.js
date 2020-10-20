const initState = {}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('log err');
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('log suc');
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('log out')
            return state;
        case 'SIGNUP_SUCCESS':
            console.log('sign suc');
            return {
                ...state,
                authError: null
            };
        case 'SIGNUP_ERROR':
            console.log('sign err');
            return {
                ...state,
                authError: action.err.message
            }
            default:
                return state;
    }
}

export default authReducer;