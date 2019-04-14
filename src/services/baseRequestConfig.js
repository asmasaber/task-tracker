export  const getBaseRequestConfig = () => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  // if token 
  // config.headers.Authorization = `Bearer ${token}`;
  return config;
};
