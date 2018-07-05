import React from 'react';

const Footer = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <footer className="page-footer">
                <div className="footer-copyright">
                    <div className="container">
                        <ul>
                            <li><a className="grey-text text-lighten-3" href="#!">About Us</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Contact Us</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">Vision</a></li>
                            <li><a className="grey-text text-lighten-3" href="#!">FAQs</a></li>
                        </ul>
                        © 2018 Copyright Text
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
