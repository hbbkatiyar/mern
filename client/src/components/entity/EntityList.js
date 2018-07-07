import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchEntities, deleteEntity } from '../../actions';
import { ENTITY } from '../../utils/hashMap';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

class EntityList extends Component {    
    componentDidMount() {
        this.props.fetchEntities();
    }

    deleteItem(id) {
        this.props.deleteEntity(id, history);
    }

    renderEntitesHeader() {
        return (
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Size</th>
                    <th>Own/Rented</th>
                    <th>Amount</th>
                    <th>Solo/Partnership</th>
                    <th></th>                    
                </tr>
            </thead>
        );
    }

    renderEntities() {
        if(!this.props.list.length) {
            return (<tr><td colSpan="7" style={{ textAlign: 'center' }}>No Data found</td></tr>);
        }

        return this.props.list.map( ({ _id, title, size, unit, type, amount, subtype, created_at, person_envolved }) => {
            return (
                <tr key={_id}>
                    <td>{title}</td>
                    <td>{size} {ENTITY.UNIT[unit]}</td>
                    <td>{ENTITY.TYPE[type]}</td>
                    <td>{amount ? amount : '-'}</td>
                    <td>{ENTITY.SUBTYPE[subtype]} <small>({person_envolved} Person)</small></td>
                    <td>
                        {this.props.auth && <Link to={`/agriculture-entity/new/${_id}`} className="waves-effect waves-light btn-small">
                            <i className="material-icons left">edit</i>
                        </Link>}

                        {this.props.auth && <a className="waves-effect waves-light btn-small" onClick={() => this.deleteItem(_id)}>
                            <i className="material-icons left">delete</i>
                        </a>}                   
                    </td>                    
                </tr>
            );
        });
    }
    
    render() {
        return (
            <table className="striped">
                {this.renderEntitesHeader()}
                <tbody>
                    {this.renderEntities()}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state) {
    return { list: state.entities };
}

export default connect(mapStateToProps, { fetchEntities, deleteEntity } )(EntityList);
