import React, { Component } from 'react';
import { ITEM_LIST } from '../utils/hashMap';

class Dashboard extends Component {

    renderContent() {
        return ITEM_LIST.map((item) => {
            return (
                <div className="col s12 m3" key={item.id}>
                    <div className="card">
                        <div className="card-image">
                            <img src={`../images/${item.category}/${item.image}`} />
                            <span className="card-title">{item.title}</span>
                        </div>
                        <div className="card-content">
                            <p>Seed Size: {item.size}</p>
                            <p>{item.description}</p>
                        </div>
                        <div className="card-action">
                            <a href="#">View Details</a>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div style={{ textAlign: 'center', marginTop: '25px' }}>
                <div className="row">
                    { this.renderContent() }
                </div>
            </div>
        );
    }
}

export default Dashboard;
