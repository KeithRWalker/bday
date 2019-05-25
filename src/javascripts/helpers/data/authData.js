import firebase from 'firebase/app';
import 'firebase/auth';
import bday from '../../components/bday/bday';

const authDiv = document.getElementById('auth');
const birthdayDiv = document.getElementById('bday');
const birthdayNavbar = document.getElementById('navbar-button-birthday');
const authNavbar = document.getElementById('navbar-button-auth');
const logoutNavbar = document.getElementById('navbar-button-logout');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.classList.add('hide');
      birthdayDiv.classList.remove('hide');
      birthdayNavbar.classList.remove('hide');
      authNavbar.classList.add('hide');
      logoutNavbar.classList.remove('hide');
      bday.bdayBuild(user.uid);
    } else {
      authDiv.classList.remove('hide');
      birthdayDiv.classList.add('hide');
      birthdayNavbar.classList.add('hide');
      authNavbar.classList.remove('hide');
      logoutNavbar.classList.add('hide');
    }
  });
};

export default { checkLoginStatus };
