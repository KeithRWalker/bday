import '../styles/main.scss';

import auth from './components/auth/auth';

import bday from './components/bday/bday';

const init = () => {
  auth.authBuild();
  bday.bdayBuild();
};

init();
