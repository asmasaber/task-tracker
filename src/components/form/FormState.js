import FieldState from "./FieldState";

export default class FormState {
    constructor(data) {
        const form = {};
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                const field = data[key];
                form[key] = new FieldState(field);
            }
        }
        return form;
    }
}