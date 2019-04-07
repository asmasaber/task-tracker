

export const  Requied = (value) => {
    return value?  "": "Required";
};

export const  MinLength = (value, minLength) => {
    return  value.length> minLength? true: false;
};

export const  MaxLength = (value, maxLength) => {
    return  value.length< maxLength? true: false;
};

export const  Email = (value) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        .test(value) ? "" : "not Valid Email";
};


export const  Password = (value) => {
    return  true;
};


export const validators = {
    Requied,
    MinLength,
    MaxLength,
    Email,
    Password
};
