import React from 'react';
import ReactDOM from 'react-dom';
import { AllRoutes } from './config/router'
import * as firebase from 'firebase'

var config = {
  apiKey: "AIzaSyCXs2qMUazezjisKUS2ICNAKbasCkJdGDQ",
  authDomain: "react-sample-17caa.firebaseapp.com",
  databaseURL: "https://react-sample-17caa.firebaseio.com",
  projectId: "react-sample-17caa",
  storageBucket: "react-sample-17caa.appspot.com",
  messagingSenderId: "411422279834"
};
firebase.initializeApp(config);

ReactDOM.render(
  <AllRoutes />,
  document.getElementById('root')
);
