import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { useSelector, Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore, createFirestoreInstance } from 'redux-firestore'
import { ReactReduxFirebaseProvider, getFirebase, isLoaded } from 'react-redux-firebase'
// import { isLoaded, isEmpty } from 'react-redux-firebase'


// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAev4psJJojDhw6SQ3mwkNd9kZgxCEHx8I",
  authDomain: "ankietoweszalenstwo-e755c.firebaseapp.com",
  databaseURL: "https://ankietoweszalenstwo-e755c.firebaseio.com",
  projectId: "ankietoweszalenstwo-e755c",
  storageBucket: "ankietoweszalenstwo-e755c.appspot.com",
  messagingSenderId: "399010807188",
  appId: "1:399010807188:web:470e44a07ae64eed39e381",
  measurementId: "G-R8RL716SKK"
};


firebase.initializeApp(firebaseConfig);
firebase.firestore();

const store = createStore(rootReducer, 
  compose(
      applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
      reduxFirestore(firebase)
));

const rrfConfig = {
  userProfile: 'users',        // 2. exact name of collection
  useFirestoreForProfile: true // 1. connect with firestore for info about user
}

const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance // <- needed if using firestore
  }

  ///////////    SPINER       ////////////////////////////////////////////////////////
  const AuthIsLoaded = ({ children }) => {
    const auth = useSelector(state => state.firebase.auth)
    if (!isLoaded(auth)) return <div className='loaderBg'><div className="spinner icon-spinner-3" aria-hidden="true"></div></div>;
    return children
  }


ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
