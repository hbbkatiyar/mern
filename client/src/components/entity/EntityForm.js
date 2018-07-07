// SurveyForm shows a form for a user to add input
import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import InputField from '../common/InputField';
import formFields from  './formFields';
import { fetchEntity } from '../../actions';

class EntityForm extends Component {
    componentDidMount() {        
        let entityId = this.props.entityId || null;
        if (entityId) {
            this.props.fetchEntity(entityId);
        }        
    }
    
    renderOptions(options) {
        return _.map(options, (option) => {
            return <option key={option.value} value={option.value}>{option.title}</option>
        });
    }

    renderInputField(label, name) {
        return <Field key={name} component={InputField} type="text" label={label} name={name} />
    }

    renderSelectField(label, name, options) {
        return (<div className="redux-form" key={name}>
            <label>{label}</label>
            <div>
                <Field name={name} component="select" style={{ display: 'block' }}>
                    <option value="">Select</option>
                    {this.renderOptions(options)}
                </Field>
            </div>
        </div>);
    }

    renderFields() {
        return _.map(formFields, ({ label, name, type, options }) => {
            return (type === 'select') 
                ? this.renderSelectField(label, name, options)
                : this.renderInputField(label, name);            
        });
    }

    render() {
        if(this.props.entityId && !this.props.initialValues) {
            return <div>Loading...</div>
        } else {
            return (
                <div>
                    <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                        {this.renderFields()}
    
                        <Link to="/agriculture-entity" className="red btn-flat white-text">Cancel</Link>
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
        initialValues: Object.keys(state.entities).indexOf("title") >= 0 ? state.entities : null
    };
}

EntityForm = reduxForm({
    validate,
    form: 'entityForm',
    destroyOnUnmount: false
})(EntityForm);
 
export default connect(mapStateToProps, { fetchEntity })(EntityForm);
