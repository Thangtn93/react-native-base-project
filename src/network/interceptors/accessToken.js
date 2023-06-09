export default AccessTokenInterceptor = {
  addAccessToken: (config) => {
    const accessToken = null;
    if (accessToken) {
      const headers = {
        ...config.headers,
        
        'Content-Type': 'application/json'
      };
      config.headers = headers;
    }
    return config;
  },

  onRejected: (error) => {
    return Promise.reject(error);
  }
}