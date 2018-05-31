import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const Dashboard = () => {
    return (
        <div>
            <SurveyList />            
            <div className="fixed-action-btn">
                <Link to="/surveys/new" className="btn-floating btn-large red">
                    <i className="material-icons">add</i>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;

// Benfits of using Redux: Typing calls action creator, updates state in Redux store.
// SurveyFormPreview can use connect to pull data out of Redux.
// ReduxForm is capable of handling validations

