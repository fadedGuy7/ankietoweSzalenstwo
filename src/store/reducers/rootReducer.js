import authReducer from './authReducer'
import photoReducer from './photoReducer'
import companyReducer from './photoReducer'
import otherReducer from './otherReducer'
import emailReducer from './emailReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    company: companyReducer,
    photos: photoReducer,
    other: otherReducer,
    email: emailReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer