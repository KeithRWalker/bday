import Axios from 'axios';

import apiKeys from '../apikeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const addNewFriend = friendObject => Axios.post(`${firebaseUrl}/friends.json`, friendObject);

const getFriendsByUid = uid => new Promise((resolve, reject) => {
  Axios.get(`${firebaseUrl}/friends.json?orderBy="uid"&equalTo="${uid}"`)
    .then((results) => {
      const friendResults = results.data;
      const friends = [];
      Object.keys(friendResults).forEach((friendId) => {
        friendResults[friendId].id = friendId;
        friendResults[friendId].rsvpId = '';
        friendResults[friendId].statusId = 'status1';
        friends.push(friendResults[friendId]);
      });
      resolve(friends);
    }).catch(err => reject(err));
});

const deleteFriend = friendId => Axios.delete(`${firebaseUrl}/friends/${friendId}.json`);

export default { addNewFriend, getFriendsByUid, deleteFriend };
