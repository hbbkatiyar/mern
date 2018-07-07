import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import CropList from './CropList';
import { fetchUser } from '../../actions';

class Crop extends Component {
    componentDidMount () {
        this.props.fetchUser();
    }

    render () {
        return (
            <div>
                <CropList auth={this.props.auth} />
                            
                {this.props.auth && <div className="fixed-action-btn">
                    <Link to="/agriculture-crops/new" className="btn-floating btn-large red">
                        <i className="material-icons">add</i>
                    </Link>
                </div>}
            </div>
        );
    }
};

function mapStateToProps(state) {
    return { auth: state.auth };
}

export default connect(mapStateToProps, { fetchUser })(Crop);

// Benfits of using Redux: Typing calls action creator, updates state in Redux store.
// SurveyFormPreview can use connect to pull data out of Redux.
// ReduxForm is capable of handling validations

