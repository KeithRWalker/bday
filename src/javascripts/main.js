import '../styles/main.scss';

import util from './helpers/util';

const init = () => {
  util.printToDom('app', 'Printing to Dom');
  console.error('testing');
};

init();
