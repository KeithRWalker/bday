import Axios from 'axios';

import apiKeys from '../apikeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const addNewFriend = friendObject => Axios.post(`${firebaseUrl}/friends.json`, friendObject);

export default { addNewFriend };
