// SurveyNew shows SurveyForm & SurveyFormReview

import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import EntityForm from './EntityForm';
import EntityFormReview from './EntityFormReview';


class EntityNew extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {showFormReview : false};
    // }

    // OR

    state = { showFormReview: false };

    renderContent() {
        if (this.state.showFormReview) {
            return (
                <EntityFormReview 
                    onCancel={() => this.setState({ showFormReview: false })} 
                />
            );
        }

        return (
            <EntityForm 
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
    form: 'entityForm'
})(EntityNew);
