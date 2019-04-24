import React from "react";
import FormState from "./FormState";

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {},
      submitted: false,
      isFormValid: true
    };
  }

  initializeForm = data => {
    this.setState({form: new FormState({...data})});
  };

  handleChange = (name, value) => {
    let form = new FormState({...this.state.form});
    form[name].value = value;
    this.setState({form: new FormState({...form})});
  };

  handleSubmit = action => {
    const validationState = this.validateForm();
    this.setState(
      {submitted: true, ...validationState},
      () => this.isFormValid && action(this.formValues)  //this.props.dispatch({type: action, payload: {...this.formValues}})
    );
  };

  get isFormValid() {
    return this.state.isFormValid;
  }

  get isFormSubmitted() {
    return this.state.submitted;
  }
  get formValues() {
    const values = {};
    const form = this.state.form;
    for (let key in form) {
      values[key] = form[key].value;
    }
    return values;
  }

  get formFields() {
    const fields = {};
    const form = this.state.form;
    for (let key in form) {
      fields[key] = form[key];
    }
    return fields;
  }
  formFieldsgetfield(name) {
    return this.state.form[name];
  }

  getfieldValue(name) {
    return this.state.form[name].value;
  }

  validateForm() {
    let form = new FormState({...this.state.form});
    let isFormValid = true;

    for (let key in form) {
      let field = form[key];
      field.validators.some(validator => {
        const errorMessage = validator(field.value);
        field.error = errorMessage;
        if (errorMessage) {
          field.isValid = isFormValid = false;
          return true;
        }
      });
    }
    return {isFormValid, form: new FormState({...form})};
  }
}