// SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import InputField from '../common/InputField';
import formFields from  './formFields';
import { fetchCrop } from '../../actions';

class CropForm extends Component {
    componentDidMount() {        
        let cropId = this.props.cropId || null;
        if (cropId) {
            this.props.fetchCrop(cropId);
        }        
    }

    renderInputField(label, name) {
        return <Field key={name} component={InputField} type="text" label={label} name={name} />
    }

    renderFields() {
        return _.map(formFields, ({ label, name, type }) => {
            return this.renderInputField(label, name);            
        });
    }

    render() {
        if(this.props.cropId && !this.props.initialValues) {
            return <div>Loading...</div>
        } else {
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
    }
};

function validate(values) {
    const errors = {};
    
    _.each(formFields, ({ name, noValueError }) => {
        if (!values[name]) {
            errors[name] = noValueError;
        }
    });

    return errors;
}

function mapStateToProps(state) {
    return {
        initialValues: Object.keys(state.crops).indexOf("title") >= 0 ? state.crops : null
    };
}

CropForm = reduxForm({
    validate,
    form: 'cropForm',
    destroyOnUnmount: false
})(CropForm);

export default connect(mapStateToProps, { fetchCrop })(CropForm);
