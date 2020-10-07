import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import { rootReducer } from "./reducers";
import App from "./App";

const firebaseConfig = {
    apiKey: "AIzaSyDwAFVOoNoK30j1GJQNlCt8j1HB0rHKsUc",
    authDomain: "todo-e9997.firebaseapp.com",
    databaseURL: "https://todo-e9997.firebaseio.com",
    projectId: "todo-e9997",
    storageBucket: "todo-e9997.appspot.com",
    messagingSenderId: "739117530160",
    appId: "1:739117530160:web:e410117a1cb1480705c1f5"
};

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true,
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

const initialState = {};
const store = createStore(rootReducer, initialState);

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance, //since we are using Firestore
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
         <App />
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);