import firebase from 'firebase/app';

import auth from './components/auth/auth';
import bday from './components/bday/bday';

import apiKeys from './helpers/apikeys.json';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  auth.authBuild();
  bday.bdayBuild();
};

init();
