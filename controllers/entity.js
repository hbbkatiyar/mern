const mongoose = require('mongoose');
const Entity =  mongoose.model('entities');
csv = require('express-csv');

exports.getEntities = async function(req, res) {
    const entities  = await Entity.find({ status: true });
    res.send(entities);
}

exports.getEntity = async function(req, res) {
    const entity  = await Entity.findById( req.params.id ); 

    res.send(entity);
}

exports.saveEntity = async function(req, res) {
    const { title, size, unit, type, subtype, person_involved, amount } = req.body;
    const entity = new Entity({
        title,
        size,
        unit,
        type,            
        subtype,
        person_involved,
        amount,
        created_at: Date.now(),
        updated_at: Date.now()
    });
    
    try {
        await entity.save();
                    
        res.send({
            status: "success",
            message: "Entity has been created succesfully."
        });
    } catch (err) {
        res.status(422).send(err);
    }        
}

exports.updateEntity = async function(req, res) {
    const { title, size, unit, type, subtype, person_involved, amount } = req.body;
    const entityModel = new Entity({
        title,
        size,
        unit,
        type,            
        subtype,
        person_involved,
        amount,
        updated_at: Date.now()
    });   
    // OR
    //const entityModel = new Entity(req.body);

    const upsertData = entityModel.toObject();
    delete upsertData._id;
    let entityId = new mongoose.mongo.ObjectId(req.body._id);
    
    try {
        await Entity.update({_id: entityId}, upsertData, {upsert: true},
            function (err) {
                if (err) {
                    res.status(500).json({
                        message: "not found any relative data"
                    });
                }
            }
        );
        res.send({
            status: "success",
            message: "Entity has been updated succesfully"
        });
    } catch (err) {
        res.status(422).send(err);
    }
}

exports.deleteEntity = async function(req, res) {
    let response  = await Entity.findByIdAndRemove( req.params.id );

    if(req.params.id == response._id) {
        response = await Entity.find({ status: true });
    }

    res.send(response);
}

exports.sampleUpload = async function(req, res) {
    console.log(req.files.file);

    let imageFile = req.files.file;
    let path = 'C:/code/katiyar-farms/';

    imageFile.mv(`${path}/public/${req.files.file.name}`, function(err) {
        if (err) {
            return res.status(500).send(err);
        }
    
        res.json({file: `public/${req.files.file.name}`});
    });
}

exports.sampleDownload = function(req, res) {
    res.csv([
        ["Name", "Employee Code", "Email"],
        ["Binit", "EMP001", "binit.katiyar@gmail.com"],
        ["Vipin", "EMP002", "vipin.pipnai@gmail.com"]
    ]);
}
