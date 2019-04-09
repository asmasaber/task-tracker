

export const  Requied = (value) => {
    return value?  "": "Required";
};

export const  MinLength = (value, minLength) => {
    return  value.length> minLength? "": "Min. Length shouid be "+ minLength;
};

export const  MaxLength = (value, maxLength) => {
    return  value.length< maxLength? "": "Min. Length shouid be "+ maxLength;
};

export const Text = (value) => {
    return /^([^0-9]*)$/.test(value)? "": "value should not contain any number" ;
};
export const  Email = (value) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        .test(value) ? "" : "not Valid Email";
};


export const  Password = (value) => {
    console.log("validate password")
    console.log(value)
    return  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
        .test(value)? "" : "password should contain at least one (1) character from three (3) of the following categories: Uppercase letter (A-Z) Lowercase letter (a-z) Digit (0-9) Special character (~`!@#$%^&*()+=_-{}[]\ | ...]";
};


export const  RepeatPassword = (value, password) => {
    console.log("repeat password")
    console.log(value)
    console.log(password)
    return  value === password? "": "repeat password not matched";
};

export const validators = {
    Requied,
    MinLength,
    MaxLength,
    Text,
    Email,
    Password,
    RepeatPassword
};
