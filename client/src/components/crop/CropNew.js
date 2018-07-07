// SurveyNew shows SurveyForm & SurveyFormReview

import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import CropForm from './CropForm';
import CropFormReview from './CropFormReview';

class CropNew extends Component {
    state = { 
        showFormReview: false,
        cropId: this.props.match.params.id || null 
    };

    renderContent() {
        if (this.state.showFormReview) {
            return (
                <CropFormReview cropId={this.state.cropId}
                    onCancel={() => this.setState({ showFormReview: false })} 
                />
            );
        }

        return (
            <CropForm cropId={this.state.cropId}
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
