import React, { Component } from 'react';

class FileUploadComponent extends Component {
  	constructor(props) {
    	super(props);

		this.state = {
			imageURL: '',
		};

   		this.handleUploadImage = this.handleUploadImage.bind(this);
  	}

  	handleUploadImage(ev) {
    	ev.preventDefault();

		const data = new FormData();
		data.append('file', this.uploadInput.files[0]);
		data.append('filename', this.fileName.value);

		fetch('http://localhost:3000/api/upload', {
			method: 'POST',
			body: data,
		}).then((response) => {
			response.json().then((body) => {
				console.log(body);
				this.setState({ imageURL: `http://localhost:3000/${body.file}` });
			});
		});
  	}

  	render() {
    	return (			
			<form onSubmit={this.handleUploadImage}>
				<div className="row">
					<div className="col s6 left-align">
						<label>Select File to Upload</label>
					</div>
					<div className="col s6">
						<input ref={(ref) => { this.uploadInput = ref; }} type="file" />
					</div>
				</div>
				<div className="row">
					<div className="col s6 left-align">
						<label>File Name</label>
					</div>
					<div className="col s6">
						<input ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Enter the preffered file name" />
					</div>
				</div>
				<div className="row">
					<div className="col s6 left-align">
						
					</div>
					<div className="col s6 right-align">
						<button class="btn waves-effect waves-light" type="submit" name="action">Upload
							<i class="material-icons right">arrow_upward</i>
						</button>
					</div>
				</div>
				<div className="row">
					{this.state.imageURL && <img src={this.state.imageURL} alt="img" />}
				</div>
			</form>						
   		);
  	}
}

export default FileUploadComponent;
