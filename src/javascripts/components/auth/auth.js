import firebase from 'firebase/app';
import 'firebase/auth';

import util from '../../helpers/util';

import loginBtn from './loginBtn.png';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const authBuild = () => {
  let auth = '<button class="btn google-auth" id="google-auth">';
  auth += `<img src="${loginBtn}">`;
  auth += '</button>';
  util.printToDom('auth', auth);
  document.getElementById('google-auth').addEventListener('click', signMeIn);
};

export default { authBuild };
