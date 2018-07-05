// SurveyFormReview shows users their form inputs for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from  './formFields';
import { withRouter } from  'react-router-dom';
import * as actions from '../../actions';

const CropFormReview = ({ onCancel, formValues, submitCrop, history }) => {
    const reviewFields = _.map(formFields, ({ name, label }) => {
        return (
            <div key={name}>
                <label>{label}</label>
                <div>{formValues[name]}</div>
            </div>
        );
    });

    return (
        <div>
            <h5>Please confirm your entry</h5>
            {reviewFields}
            <button className="yellow darken-3 btn-flat white-text" onClick={onCancel}>
                Back
            </button> 
            <button className="green btn-flat right white-text"
                onClick={() => submitCrop(formValues, history)}>
                Save
                <i className="material-icons right">email</i>
            </button>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        formValues: state.form.cropForm.values
    };
}

export default connect(mapStateToProps, actions)(withRouter(CropFormReview));

//withRouter helper
