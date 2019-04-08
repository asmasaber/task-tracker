

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
    return /[^0-9]/.test(value)? "": "value should not contain any number" ;
}
export const  Email = (value) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        .test(value) ? "" : "not Valid Email";
};


export const  Password = (value) => {
    return  true;
};


export const  RepeatPassword = (value, Password) => {
    return  value === Password? "": "repeat password not matched";
};

export const validators = {
    Requied,
    MinLength,
    MaxLength,
    Text,
    Email,
    Password
};
