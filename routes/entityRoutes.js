//const _ = require('lodash');
const EntityController = require('../controllers/entity');

module.exports = app => {
    app.get('/api/entity', EntityController.getEntities);    
    app.get('/api/entity/:id', EntityController.getEntity);
    app.post('/api/entity', EntityController.saveEntity);
    app.delete('/api/entity/:id', EntityController.deleteEntity);
    app.put('/api/entity/:id', EntityController.updateEntity);    
    app.post('/api/upload', EntityController.sampleUpload);
    app.get('/api/download-csv', EntityController.sampleDownload);   
};
