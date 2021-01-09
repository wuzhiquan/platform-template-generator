/* eslint-disable arrow-body-style */
import { APP_FUNC_RESPONSE_CALLBACK } from './constants';

const createMessage = (funcName, callbackName, params = {}) => {
  return JSON.stringify({
    func: funcName,
    params: {
      ...params,
      msg: params.msg || funcName,
    },
    callback: callbackName,
  });
};


const callAppFunc = (funcName, callbackName = APP_FUNC_RESPONSE_CALLBACK, params) => {
  const message = createMessage(funcName, callbackName, params);
  return () => {
    return new Promise((resolve) => {
      window[callbackName] = (result) => {
        // console.log(result, 'callAppFunc')
        resolve(result);
        window[callbackName] = () => { };
      };
      if (window.native) window.native.postMessage(message);
    });
  };
};

export default callAppFunc;
