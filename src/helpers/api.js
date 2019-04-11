const users = [
    {
        name: "asma",
        email: "asma@mail.com",
        password: "123456"
    }
];
export const userApi = {
    login,
    logout,
    register
};

function login(email, password) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find(user => {
                return user.email === email && user.password === password && user;
            });
            user
                ? resolve(user)
                : reject("incorrect Email or password ");
        }, 1000);
    });
}

function logout() {
    localStorage.removeItem("user");
}

function register({email, name, password, gender}) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userFound = users.find(user => {
                return (user.email === email);
            });
            if(!userFound){

                const newUser = {
                    email,
                    password,
                    name,
                    gender
                };
                // push to array 
                users.push(newUser);
                resolve(newUser);
            }
            else{
                reject("user exists");
            }
        }, 1000);
    });
}
