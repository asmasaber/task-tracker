import {BASE_URL} from "../constants/api";
import {loadUser} from "../services/localStorage";

const token = loadUser().token;

const headers = {
  "Content-Type": "application/json",
  "Authorization": `Bearer ${token}`
 }

async function request (method, endpoint, requestBody, ...rest) {
  const response = await window.fetch(`${BASE_URL}${endpoint}`, {
    headers,
    method,
    body: JSON.stringify(requestBody),
    ...rest
  });

  if (response.status === 200) 
    return await response.json();
  else
    throw new Error(response.statusText);
}

export const api = {
  get: (...rest) => request("GET", ...rest),
  post: (...rest) => request("POST", ...rest),
  put: (...rest) => request("PUT", ...rest),
  delete: (...rest) => request("DELETE", ...rest),
}