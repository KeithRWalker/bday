import util from '../../helpers/util';

import birthdayData from '../../helpers/data/birthdayData';

const bdayBuild = (uid) => {
  birthdayData.getBirthdayByUid(uid).then((birthday) => {
    let bday = `<h1>${birthday.date}</h1>`;
    bday += `<h4>${birthday.time}</h4>`;
    bday += `<h4>${birthday.location}</h4>`;
    bday += `<img src="${birthday.imageUrl}"></img>`;
    util.printToDom('event', bday);
  }).catch(err => console.error(err, 'could not get birthday'));
};

export default { bdayBuild };
