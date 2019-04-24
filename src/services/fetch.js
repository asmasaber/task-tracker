import { loadUser } from "../services/localStorage";

export const  BASE_URL = "http://www.garonz.com:3000";

const headers = () => {
  const user = loadUser();
  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: user ? `Bearer ${user.token}` : ""
    }
  };
};

const request = async (method , {endPoint, params, requestBody} , ...rest) => {
  let url = new URL(`${BASE_URL}${endPoint}`);
  if(params) url.search = new URLSearchParams(params);
  const response = await window.fetch(url, {
    ...headers(),
    method,
    body: JSON.stringify(requestBody),
    ...rest
  });

  if (response.status === 200 ) return await response.json();
  if (response.status === 204 ) return true; // has no content 
  else throw new Error(response.statusText);
};

export const api = {
  get: (...rest) => request("GET", ...rest),
  post: (...rest) => request("POST", ...rest),
  put: (...rest) => request("PUT", ...rest),
  delete: (...rest) => request("DELETE", ...rest)
};
