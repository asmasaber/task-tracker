import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {},
            submitted: false,
            isFormValid: false
        };
    }

    handleChange = e => {
        const { name, value } = e.target;
        let _form = Object.assign({}, this.state.form); //{ ...this.state.form}
        _form[name].value = value;
        this.setState({form: { ..._form}})
    };
   
    handleSubmit = login => e => {
        console.log("enter submit")
        e.preventDefault();
        this.setState({ submitted: true });
        this.validateForm();
        if(this.isFormValid)
            login();
    }

    get isFormValid () {
        return this.state.isFormValid;
    }

    get isFormSubmitted () {
        return this.state.submitted;
    }
    get formValues () {
        // const values = Object.values(this.state.form).map((fieldInfo) => {
        //     return fieldInfo.value
        // })
        const values = {}
        const form = this.state.form
        for(let key in form)
        {
            values[key] =  form[key].value ;
        }
        return values;
    }

    getfield(fieldName) {
        return this.state.form[fieldName];
    }

    getfieldValue (fielldName) {
        return this.state.form[fielldName].value;
    }

    validateForm() {
        const form = this.state.form;
        let _form = Object.assign({}, this.state.form); //{ ...this.state.form}
        this.setState({ isFormValid: true})
        for(let key in form)
        {
            let field = _form[key];
            field.isValid= true ;
            this.setState({ form: _form});
            field.validators.some(validator => {
                let errorMessage = "";
                validator.restParm ?
                    errorMessage= validator.type(field.value, ... validator.restParm)
                    : errorMessage = validator.type(field.value) ;
                field.error = errorMessage;
                if(errorMessage)
                {
                    field.isValid = false;
                    this.setState({isFormValid: false});
                    return true;
                }
            });
        }
    }

    render () {
        return (
            <div></div>
        );
    }
}

export default Form;