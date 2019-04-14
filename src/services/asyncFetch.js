export default async function asyncFetch(url, requestConfig = {}) {
  const response = await fetch(url, requestConfig);
  const isSuccess = response.status === 200;
  if (isSuccess) {
    return response;
  }
  throw new Error(response.statusText);
}
  