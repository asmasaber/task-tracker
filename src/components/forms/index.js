import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            fileds: [],
            submitted: false,
            isFormValid: false
        };
    }

    set filed({name, value, validators}) {
        this.state.fileds.push({name, value, validators, isValid: true, error: ""});
    }

    validateForm() {
        this.setState({isFormValid: true});
        this.state.fileds.map(field => {
            return field.validators.some(validator => {
                const errorMessage = validator();
                if(errorMessage)
                {
                    field.isValid = false;
                    field.error = errorMessage;
                    this.setState({isFormValid: false});
                    return false;
                }
            });
        });
    }

    getfield(fieldName) {
        return this.state.fileds.filter(field => {
            if(field.name === fieldName){
                return field;
            }
        });
    }
    render () {
        return (
            <div></div>
        );
    }
}

export default Form;