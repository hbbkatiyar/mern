import React, { Component } from 'react';
import FileUploadComponent from './FileUploadComponent';

class DebitHeads extends Component {

    render() {
        return (
            <div style={{ textAlign: 'center', minHeight: '250px', marginTop: '150px' }}>
                <h3>Debit Head Section</h3>
                <FileUploadComponent />
            </div>
        );
    }
}

export default DebitHeads;
