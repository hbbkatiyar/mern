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
        console.log(this.props);
        
        //let id = this.props.location || '5b2547d0af0e4b303a2d92bf';
        //this.props.fetchEntity(id);
    }
    renderOptions(options) {
        return _.map(options, (option) => {
            return <option value={option.value}>{option.title}</option>
        });
    }
    renderInputField(label, name) {
        console.log(this.props.entity[name]);

        return <Field key={name} component={InputField} type="text" label={label} name={name} />
    }
    renderSelectField(label, name, options) {
        return (<div className="redux-form">
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
        console.log(this.props.entity);

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

function mapStateToProps(state) {
    //console.log(state.entities);

    return {
        entity: state.entities
    };
}

//export default
EntityForm = reduxForm({
    //validate,
    form: 'entityForm',
    destroyOnUnmount: false
})(EntityForm);
 
export default connect(mapStateToProps, { fetchEntity })(EntityForm);
