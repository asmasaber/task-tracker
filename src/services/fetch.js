import {BASE_URL} from "../constants/api";

const headers = {"Content-Type": "application/json"}

async function request (method, endpoint, requestBody) {
  const requestConfig = {
    headers,
    method,
    body: JSON.stringify(requestBody)
  };
  const response = await window.fetch(`${BASE_URL}${endpoint}`, requestConfig);
  if (response.status === 200) 
    return response;
  else
    throw new Error(response.statusText);
}

export const fetch = {
  get: (... rest) => request("GET", ...rest),
  post: (... rest) => request("POST", ...rest),
  put: (... rest) => request("PUT", ...rest),
  delete: (... rest) => request("DELETE", ...rest),
}