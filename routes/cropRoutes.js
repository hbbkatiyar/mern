//const _ = require('lodash');
const CropController = require('../controllers/crop');

module.exports = app => {
    app.get('/api/crop', CropController.getCrops);    
    app.post('/api/crop', CropController.saveCrop);
    app.delete('/api/crop/:id', CropController.deleteCrop);    
};
