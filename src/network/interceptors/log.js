const DEBUG = __DEV__;

// import {
//   Sentry,
//   SentrySeverity,

// } from 'react-native-sentry';
let timeStart = 0
export default LogInterceptor = {

  requestLog: (config) => {
    if (DEBUG) {
      timeStart = new Date()
      console.log(`>>> ${config.method}: ${config.url}`);
      console.log(`>>> ${JSON.stringify(config.data)}`);
      console.log(config.headers);
    }
    // Sentry.captureMessage('REQUEST' + config.url, { level: SentrySeverity.Info });

    return config;
  },

  requestError: (error) => {
    if (DEBUG) {
      console.log(error);
    }
    return Promise.reject(error);
  },

  responseLog: (response) => {
    if (DEBUG) {
      if (!response) return;
      const config = response.config;
      if (!config) return;

      console.log(`<<< ${response.status} ${config.method}: ${config.url}`);
      console.log(response);
      console.log(`Response Time : ${config.url} + ${new Date() - timeStart} + ms`);
    }
    // Sentry.captureMessage('RESPONSE' + response, { level: SentrySeverity.Warning });

    return response;
  },

  responseError: (error) => {
    if (DEBUG && error) {
      const config = error.config;
      const response = error.response;
      if (response) {
        // console.log(`<<< ${response.status} ${config.method}: ${config.url}`);
        console.log(response);
      } else {
        // console.log(`<<< ${config.method}: ${config.url}`);
        console.log('network log error', error);
      }
    }
    return Promise.reject(error);
  }

}