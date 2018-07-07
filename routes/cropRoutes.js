//const _ = require('lodash');
const CropController = require('../controllers/crop');

module.exports = app => {
    app.get('/api/crop', CropController.getCrops);
    app.get('/api/crop/:id', CropController.getCrop);  
    app.post('/api/crop', CropController.saveCrop);
    app.put('/api/crop/:id', CropController.updateCrop);
    app.delete('/api/crop/:id', CropController.deleteCrop);    
};
