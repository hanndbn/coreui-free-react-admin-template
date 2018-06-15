//TODO: write tests to util functions

import React from 'react';
import { connect } from 'react-redux';
import { assignIn as _assignIn } from 'lodash';
//import moment from 'moment';
import request from 'request';

/* ----------------------------------
    Server
 -----------------------------------*/

// Send request to server by AJAX
export function sendRequestToServer(serviceURL, httpMethod, requestParam, successCallback, failCallback, dispatch){
    // let paramString;
    // if (requestParam) {
    //
    //     paramString = JSON.stringify(requestParam);
    // }

    request.post({
        url: serviceURL,
        json: true,
        headers: {'content-type': 'application/json'},
        //rejectUnauthorized: false,
        //strictSSL: false,
        //secureProtocol: 'TLSv1_method',
        body: requestParam
    }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            if (successCallback && typeof(successCallback) == 'function') {
                successCallback(body);
                console.log(body);
            } else {
                console.log("successCallback is not define or is not a function");
            }
        }
        else{
            if (failCallback && typeof(failCallback) == 'function') {
                failCallback(error);
            } else {
                console.log("failCallback is not define or is not a function");
            }
        }
    });
}
