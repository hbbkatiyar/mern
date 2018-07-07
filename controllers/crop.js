const mongoose = require('mongoose');
const Crop =  mongoose.model('crops');

exports.getCrops = async function(req, res) {
    const crops  = await Crop.find({ status: true }); 

    res.send(crops);
}

exports.getCrop = async function(req, res) {
    const crop  = await Crop.findById( req.params.id ); 

    res.send(crop);
}

exports.saveCrop = async function(req, res) {
    const { title } = req.body;        
    const slug = title.toLowerCase().split(' ').join('_');
    const crop = new Crop({
        title,
        slug,
        created_at: Date.now(),
        updated_at: Date.now()
    });
    
    try {
        await crop.save();
                    
        res.send({
            status: "success",
            message: "Crop has been saved succesfully."
        });
    } catch (err) {
        res.status(422).send(err);
    }
}

exports.updateCrop = async function(req, res) {
    const { title } = req.body;        
    const slug = title.toLowerCase().split(' ').join('_');
    const cropModel = new Crop({
        title,
        slug,
        created_at: Date.now(),
        updated_at: Date.now()
    });
    
    const upsertData = cropModel.toObject();
    delete upsertData._id;
    let cropId = new mongoose.mongo.ObjectId(req.body._id);
    
    try {
        await Crop.update({_id: cropId}, upsertData, {upsert: true},
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
            message: "Crop has been updated succesfully"
        });
    } catch (err) {
        res.status(422).send(err);
    }
}

exports.deleteCrop = async function(req, res) {
    let response  = await Crop.findByIdAndRemove( req.params.id ); 

    if(req.params.id == response._id) {
        response = await Crop.find({ status: true });
    }

    res.send(response);
}