import Axios from 'axios';

import apikeys from '../apikeys.json';

const firebaseUrl = apikeys.firebaseKeys.databaseURL;

const getBirthdayByUid = uid => new Promise((resolve, reject) => {
  Axios.get(`${firebaseUrl}/birthdays.json?orderBy="uid"&equalTo="${uid}"`)
    .then((results) => {
      const birthdayResults = results.data;
      const birthdays = [];
      Object.keys(birthdayResults).forEach((birthdayId) => {
        birthdayResults[birthdayId].id = birthdayId;
        birthdays.push(birthdayResults[birthdayId]);
      });
      resolve(birthdays[0]);
    }).catch(err => reject(err));
});

export default { getBirthdayByUid };
