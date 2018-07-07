import React, { Component } from 'react';
import FileUploadComponent from './FileUploadComponent';

class DebitHeads extends Component {

    renderDownloadSection() {
        return (
            <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Download Sample Content</span>
                        <div className="row">
                            This section will help you to under stand that how this section will work.
                            This section will help you to under stand that how this section will work.
                            This section will help you to under stand that how this section will work.
                            This section will help you to under stand that how this section will work.
                        </div>
                        <div className="row">
                            <div className="col s6 left-align">
                                
                            </div>
                            <div className="col s6 right-align">
                                <button class="btn waves-effect waves-light" type="submit" name="action">Download
                                    <i class="material-icons right">arrow_downward</i>
                                </button>
                            </div>
                        </div>
                        <div className="row"></div>
                    </div>
                </div>
            </div>
        );
    }

    renderUploadSection() {
        return (
            <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Upload Actual Content</span>
                        <FileUploadComponent />
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="row center-align">
                <h5>Debit Heads Section</h5>
                <div className="row">
                    {this.renderDownloadSection()}
                    {this.renderUploadSection()}
			    </div>
            </div>
        );
    }
}

export default DebitHeads;
