import firebase from 'firebase/app';

import auth from './components/auth/auth';
import myNavbar from './components/myNavbar/myNavbar';

import authData from './helpers/data/authData';

import apiKeys from './helpers/apikeys.json';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  myNavbar.navbarEvents();
  authData.checkLoginStatus();
  auth.authBuild();
};

init();
