//import {CONSTANTS} from "./constant.js";
//export const WEBSERVICE_URL = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '')+'/'+CONSTANTS.PRE_PATH;
// export const WEBSERVICE_URL = 'http://localhost:8099';

export const WEBSERVICE_URL = 'http://localhost:5001/footballfanglobal/us-central1/api/1.0';
// export const WEBSERVICE_URL = 'http://118.70.177.14:8443' +'/'+CONSTANTS.PRE_PATH;
console.log("WEBSERVICE_URL: ", WEBSERVICE_URL);


//export const SOCKET_URL = 'http://localhost:9092';

// Authentication
export const CONST_SERVICE_URL_LOGIN = WEBSERVICE_URL + '/CheckLoginAdmin';
export const CONST_SERVICE_URL_REGISTER = WEBSERVICE_URL + '/CreateAccount';

//User
export const CONST_SERVICE_URL_GET_ALL_USER = WEBSERVICE_URL + '/GetAllUser';

export const CONST_SERVICE_URL_GET_SETTING = WEBSERVICE_URL + '/GetSetting';
export const CONST_SERVICE_URL_GET_MANAGER_TABLE = WEBSERVICE_URL + '/ManagerTable';

export const CONST_SERVICE_URL_GET_JACKPOT = WEBSERVICE_URL + '/GetJackpot';

export const LIST_TABLE_CONSTRAINT = {
  "ChallengeData": {
    "Environment": false,
    "GameSettings": false,
    "Reward": false,
    "ChallengeTitle": false,
  },
  "GameSettings":
    {
      "GameTypes": true
    },
  "GameTypes": {
    "PlayType": false
  },
};



