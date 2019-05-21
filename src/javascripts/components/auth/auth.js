import util from '../../helpers/util';

const authBuild = () => {
  const auth = '<h1>auth</h1>';
  util.printToDom('auth', auth);
};

export default { authBuild };
