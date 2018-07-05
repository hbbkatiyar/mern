// SurveyFormReview shows users their form inputs for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from  './formFields';
import { withRouter } from  'react-router-dom';
import * as actions from '../../actions';
import { ENTITY } from '../../utils/hashMap';

const EntityFormReview = ({ onCancel, formValues, submitEntity, history }) => {
    
    const reviewFields = _.map(formFields, ({ name, label, type }) => {
        return (
            <div key={name}>
                <label>{label}</label>
                { type === 'text' && <div>{formValues[name]}</div>}
                { (type === 'select' && name === 'unit') && <div>{ENTITY.UNIT[formValues[name]]}</div>}
                { (type === 'select' && name === 'type') && <div>{ENTITY.TYPE[formValues[name]]}</div>}
                { (type === 'select' && name === 'subtype') && <div>{ENTITY.SUBTYPE[formValues[name]]}</div>}
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
                onClick={() => submitEntity(formValues, history)}>
                Save
                <i className="material-icons right">email</i>
            </button>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        formValues: state.form.entityForm.values
    };
}

export default connect(mapStateToProps, actions)(withRouter(EntityFormReview));

//withRouter helper
