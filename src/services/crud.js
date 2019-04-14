import {BASE_URL} from "../constants/api";
import asyncFetch from "./asyncFetch";
import {getBaseRequestConfig} from "./baseRequestConfig";

export async function post (endpoint, requestBody) {
  const requestConfig = {
    ...getBaseRequestConfig(),
    method: "POST",
    body: JSON.stringify(requestBody)
  };
  return await asyncFetch(`${BASE_URL}${endpoint}`, requestConfig);
}