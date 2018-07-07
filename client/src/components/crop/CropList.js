import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCrops, deleteCrop } from '../../actions';

class CropList extends Component {
    componentDidMount() {
        this.props.fetchCrops();
    }
    deleteItem(id) {
        this.props.deleteCrop(id);
    }
    renderTableHeader() {
        return (
            <thead>
                <tr>
                    <th>Title</th>
					<th>Created At</th>
                    <th></th>
                </tr>
            </thead>
        );
    }
    renderContent() {
        if(!this.props.list.length) {
            return (<tr><td colSpan="3" style={{ textAlign: 'center' }}>No Data found</td></tr>);
        }

        return this.props.list.map(( { _id, title, created_at } ) => {
            return (
                <tr key={_id}>
                    <td>{title}</td>
					<td>{new Date(created_at).toLocaleDateString()}</td>
                    <td>
                        {this.props.auth && <Link to={`/agriculture-crops/new/${_id}`} className="waves-effect waves-light btn-small">
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
                {this.renderTableHeader()}
                <tbody>
                    {this.renderContent()}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state) {
    return { list: state.crops };
}

export default connect(mapStateToProps, { fetchCrops, deleteCrop } )(CropList);
