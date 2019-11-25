import {combineReducers, compose, createStore} from "redux";
import {reactReduxFirebase, firebaseReducer} from "react-redux-firebase";
import {reduxFirestore, firestoreReducer} from "redux-firestore";
import firebase from "firebase/app";
import 'firebase/firestore'
import {composeWithDevTools} from "redux-devtools-extension";

var firebaseConfig = {
  apiKey: "AIzaSyDCy4GRwqj8QIiY4RoY0Db4QgGxlfHoHFc",
  authDomain: "biblioteca-firestore.firebaseapp.com",
  databaseURL: "https://biblioteca-firestore.firebaseio.com",
  projectId: "biblioteca-firestore",
  storageBucket: "biblioteca-firestore.appspot.com",
  messagingSenderId: "423760626847",
  appId: "1:423760626847:web:5fbd14da010d942c898eaa",
  measurementId: "G-B1N1S0LWKJ"
};

firebase.initializeApp(firebaseConfig);

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true,
};

const createStoreWithFirestore = compose(
  reactReduxFirebase(firebase, rrfConfig),
  reduxFirestore(firebase),
)(createStore);

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer,
});

const initialState = {};

const store = createStoreWithFirestore(rootReducer, initialState, compose(
  reactReduxFirebase(firebase),
  composeWithDevTools()
));

export default store;
