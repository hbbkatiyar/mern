import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import EntityList from './EntityList';
import { fetchUser } from '../../actions';

class Entity extends Component {
    componentDidMount () {
        this.props.fetchUser();
    }

    render () {
        return (
            <div>
                <EntityList auth={this.props.auth} />
                            
                {this.props.auth && <div className="fixed-action-btn">
                    <Link to="/agriculture-entity/new" className="btn-floating btn-large red">
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

export default connect(mapStateToProps, { fetchUser })(Entity);

// Benfits of using Redux: Typing calls action creator, updates state in Redux store.
// SurveyFormPreview can use connect to pull data out of Redux.
// ReduxForm is capable of handling validations

