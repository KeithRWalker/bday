import util from '../../helpers/util';

const navBuild = () => {
  const nav = '<h1>Navbar<h1>';
  util.printToDom('navbar', nav);
};

export default { navBuild };
