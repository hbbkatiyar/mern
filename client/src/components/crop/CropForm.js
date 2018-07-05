// SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import InputField from '../common/InputField';
import formFields from  './formFields';

class CropForm extends Component {
    renderInputField(label, name) {
        return <Field key={name} component={InputField} type="text" label={label} name={name} />
    }
    renderFields() {
        return _.map(formFields, ({ label, name, type }) => {
            return this.renderInputField(label, name);            
        });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}

                    <Link to="/agriculture-crops" className="red btn-flat white-text">Cancel</Link>
                    <button type="submit" className="teal btn-flat right white-text">
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        );
    }
};
function validate(values) {
    const errors = {};
    
    _.each(formFields, ({ name, noValueError }) => {
        if (!values[name]) {
            errors[name] = noValueError;
        }
    });

    console.log(errors);
    return errors;
}

export default reduxForm({
    validate,
    form: 'cropForm',
    destroyOnUnmount: false
})(CropForm);
