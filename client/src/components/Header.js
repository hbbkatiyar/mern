import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabname: this.getCurrentTabName(),
            agriculture: 'entity',
            dairy: 'home'
        };
    }

    getCurrentTabName() {
        let tabname = 'home';

        if (window.location.pathname.indexOf('agriculture') >= 0) {
            tabname = 'agriculture';
        } else if(window.location.pathname.indexOf('dairy') >= 0) {
            tabname = 'dairy';
        }

        return tabname;
    }

    changeTab(tabname) {
        console.log("tabname = " + tabname);

        this.setState({
            tabname: tabname
        }, console.log(this.state.tabname));
    }

    renderLogo() {
        return (<Link to="/" className="left brand-logo">
            <img src="../../images/logo.png" alt="Logo"
                style={{ 'width': '70px',  'padding': "0px 10px" }} />
        </Link>);
    }

    renderAgricultureHeader() {
        console.log("renderAgricultureHeader");

        return (
            <div className="nav-content">
                <ul className="tabs tabs-transparent">
                    <li className="tab">
                        <Link to="/agriculture-entity" className="active">Entities</Link></li>

                    <li className="tab">
                        <Link to="/agriculture-crops">Crops</Link></li>                            

                    { this.props.auth 
                        && <li className="tab">
                            <Link to="/agriculture-debit-heads">Debit Heads</Link></li> }

                    { this.props.auth 
                        && <li className="tab">
                            <Link to="/agriculture-inventories">Inventories</Link></li> }

                    { this.props.auth 
                        && <li className="tab">
                            <Link to="/agriculture-credit-heads">Credit Heads</Link></li> }
                </ul>
            </div>
        );
    }

    renderDairyHeader() {
        return (
            <div className="nav-content">
                <ul className="tabs tabs-transparent">
                    <li className="tab"><a href="#" className="active">Home</a></li>
                    <li className="tab"><a href="#">About Us</a></li> 
                    <li className="tab"><a href="#">Our Approach</a></li>                           
                    <li className="tab"><a href="#">Services</a></li>
                    <li className="tab"><a href="#">Gallery</a></li>
                    <li className="tab"><a href="#">Contact Us</a></li>
                </ul>
            </div>
        );
    }    

    renderContent() {
        switch(this.props.auth) {
            case null:
                return;

            case false:
                return [
                    <li key="home" className="tab" onClick={() => this.changeTab('home')}>
                        <Link className={`${this.state.tabname === 'home' ? 'active' : ''}`} to="/">Home</Link>
                    </li>,
                    <li key="agriculture" className="tab" onClick={() => this.changeTab('agriculture')}>
                        <Link className={`${this.state.tabname === 'agriculture' ? 'active' : ''}`} to="/agriculture-entity">Agriculture</Link>
                    </li>,
                    <li key="dairy" className="tab" onClick={() => this.changeTab('dairy')}>
                        <Link className={`${this.state.tabname === 'dairy' ? 'active' : ''}`} to="/dairy">Dairy</Link>
                    </li>,
                    <li key="login" className="tab"><a href="/auth/google">Login With Google</a></li>
                ];
            
            default:
                return [
                    <li key="home" className="tab" onClick={() => this.changeTab('home')}>
                        <Link className={`${this.state.tabname === 'home' ? 'active' : ''}`} to="/">Home</Link>
                    </li>,
                    <li key="agriculture" className="tab" onClick={() => this.changeTab('agriculture')}>
                        <Link className={`${this.state.tabname === 'agriculture' ? 'active' : ''}`} to="/agriculture-entity">Agriculture</Link>
                    </li>,
                    <li key="dairy" className="tab" onClick={() => this.changeTab('dairy')}>
                        <Link className={`${this.state.tabname === 'dairy' ? 'active' : ''}`} to="/dairy">Dairy</Link>
                    </li>,
                    <li key="logout" className="tab"><a href="/api/logout">Logout</a></li>
                ];
        }
    }

    render() {
        console.log("header render");

        return (
            <nav className="nav-extended">
                <div className="nav-wrapper">
                    {this.renderLogo()}
                    <ul className="tabs tabs-transparent right" style={{ textAlign: 'right' }}>
                        {this.renderContent()}
                    </ul>
                </div>
                <div className="divider"></div>
                {this.state.tabname === 'agriculture' && this.renderAgricultureHeader()}
                {this.state.tabname === 'dairy' && this.renderDairyHeader()}
            </nav>
        );
    }
};

function mapStateToProps ({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);