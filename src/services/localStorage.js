export const saveUser = user => localStorage.setItem("user", JSON.stringify(user));
export const loadUser = () => JSON.parse(localStorage.getItem("user"));
export const removeUser = () => localStorage.removeItem("user");
