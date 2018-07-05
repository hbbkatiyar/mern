// SurveyNew shows SurveyForm & SurveyFormReview

import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import CropForm from './CropForm';
import CropFormReview from './CropFormReview';


class CropNew extends Component {
    state = { showFormReview: false };

    renderContent() {
        if (this.state.showFormReview) {
            return (
                <CropFormReview 
                    onCancel={() => this.setState({ showFormReview: false })} 
                />
            );
        }

        return (
            <CropForm 
                onSurveySubmit={() => this.setState({ showFormReview: true })}
            />
        );
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        );
    }
};

export default reduxForm({
    form: 'cropForm'
})(CropNew);
