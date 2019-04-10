export const  checkRequied = (value) => value && "Required";

export const  checkMinLength = (length) => (value) => value.length <= length && `Min. Length shouid be ${length}`;

export const  checkMaxLength = (length) => (value) => value.length >= length && `Min. Length shouid be ${length}`;

export const checkText = (value) => !/^([^0-9]*)$/.test(value) && "value should not contain any number" ;

export const  checkEmail = (value) => !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    .test(value) && "not Valid Email";

export const  checkPassword = (value) => !/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    .test(value) && "password should contain at least one (1) character from three (3) of the following categories: Uppercase letter (A-Z) Lowercase letter (a-z) Digit (0-9) Special character (~`!@#$%^&*()+=_-{}[]\ | ...]";

export const  confirmPassword = (password) => (value) => value !== password && "repeat password not matched";
