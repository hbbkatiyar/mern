import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

// BrowserRouter: Brains of React Router, tells react router how to behave react router
// Route: React Component

import Header from './Header';
import Footer from './Footer';
import Dashboard from './Dashboard';
import Entity from './entity/Entity';
import EntityNew from './entity/EntityNew';
import DebitHeads from './entity/DebitHeads';

import Crop from './crop/Crop';
import CropNew from './crop/CropNew';

// const DebitHeads = () => {
//     return (
//         <div style={{ textAlign: 'center', minHeight: '250px', marginTop: '150px' }}>DebittHead Section</div>
//     );
// }

const CreditHeads = () => {
    return (
        <div style={{ textAlign: 'center', minHeight: '250px', marginTop: '150px' }}>CreditHead Section</div>
    );
}

const Inventories = () => {
    return (
        <div style={{ textAlign: 'center', minHeight: '250px', marginTop: '150px' }}>Inventories Section</div>
    );
}

const Dairy = () => {
    return (
        <div style={{ textAlign: 'center', minHeight: '250px', marginTop: '150px' }}>Dairy Section</div>
    );
}

class App extends Component {
    componentDidMount () {
        this.props.fetchUser();
    }

    render () {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />

                        {/* Start Dashboard Section Routes*/}             
                        <Route exact path="/" component={Dashboard} />  
                        {/* End Dashboard Section Routes*/}

                        {/* Start Agriculure Section Routes*/}
                        <Route exact path="/agriculture-entity" component={Entity} />
                        <Route exact path="/agriculture-entity/new" component={EntityNew} />
                        <Route exact path="/agriculture-entity/new/:id" component={EntityNew} />
                        <Route exact path="/agriculture-crops" component={Crop} />
                        <Route exact path="/agriculture-crops/new" component={CropNew} />
                        <Route exact path="/agriculture-debit-heads" component={DebitHeads} />                        
                        <Route exact path="/agriculture-inventories" component={Inventories} />
                        <Route exact path="/agriculture-credit-heads" component={CreditHeads} />
                        {/* End Agriculure Section Routes*/}


                        {/* Start Dairy Section Routes*/}
                        <Route exact path="/dairy" component={Dairy} />
                        {/* End Dairy Section Routes*/}

                        <Footer />                    
                    </div>
                </BrowserRouter>
            </div>
        );
    }    
};

export default connect(null, actions)(App);
