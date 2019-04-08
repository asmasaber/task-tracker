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

    validateForm() {
        console.log(this.state);

        const form = this.state.form
        let _form = Object.assign({}, this.state.form) //{ ...this.state.form}
        for(let key in form)
        {
            _form[key].isValid= true ;
            // this.setState({ form: { ..._form}, isFormValid: true})
            console.log(this.state);

        }
            

        // return this.state.form.forEach((value, field) => {
        //     console.log("field");
        //     console.log(field);
        //     console.log(value);
        //     field.isValid= true;
        //     // this.setState({form: {}})
        //     // this.setState({isFormValid: true});
        //     console.log("this.state");
        //     console.log(this.state);
        //     console.log(this.state.form[field]);

        //     // return field.validators.some(validator => {
        //     //     console.log("validator");
        //     //     console.log(validator);
        //     //     console.log(validator.restParm);

        //     //     let errorMessage = "";
        //     //     validator.restParm ?
        //     //         errorMessage= validator.type(field.value, ... validator.restParm)
        //     //         : errorMessage = validator.type(field.value) ;
        //     //     field.error = errorMessage;

        //     //     if(errorMessage)
        //     //     {
        //     //         field.isValid = false;
        //     //         this.setState({isFormValid: false});
        //     //         return true;
        //     //     }
        //     // });
        // });
    }

    getfield(fieldName) {
        return this.state.form[fieldName];
    }
    render () {
        return (
            <div></div>
        );
    }
}

export default Form;