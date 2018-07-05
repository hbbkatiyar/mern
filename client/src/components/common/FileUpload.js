import React, { Component } from 'react';
import axios from 'axios';

class FileUpload extends Component {

    constructor(props) {
        super(props);
        this.state = {
            uploadStatus: false
        }
        this.handleUploadImage = this.handleUploadImage.bind(this);
    }  
  
    handleUploadImage(ev) {
        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);
        data.append('filename', this.fileName.value);

        console.log(this.uploadInput.files[0]);
        console.log(this.uploadInput.files[0].name);
        console.log(data);

        ev.preventDefault();

        axios.post('/api/upload', { data: data })
            .then(function (response) {
                console.log(response);
                //this.setState({ imageURL: `http://localhost:8000/${body.file}`, uploadStatus: true });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    
    render() {
        return(
            <div className="container">
                <form onSubmit={this.handleUploadImage} enctype="multipart/form-data">
                    <div className="form-group">
                        <input className="form-control" ref={(ref) => { this.uploadInput = ref; }} type="file" />
                    </div>    
                    <div className="form-group">
                        <input className="form-control" ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Optional name for the file" />
                    </div>    
                    <button className="btn btn-success" type="submit">Upload</button>    
                </form>
          </div>
        )
    }
}

export default FileUpload;
