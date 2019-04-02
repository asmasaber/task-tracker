const users = [
  {
    email: "asma@mail.com",
    password: "123456"
  }
];
export const userService = {
  login,
  logout,
  register
};

function login(email, password) {
  const user = users.map(user => {
    if (user.email === email && user.password === password) return user;
  });
  if (user) {
    localStorage.setItem("user", user);
    return Promise.resolve(user);
  } else {
    localStorage.setItem("user", user);
    return Promise.reject("User Not Found");
  }
}

function logout(username, password) {
  localStorage.removeItem("user");
}

function register(username, password) {}
