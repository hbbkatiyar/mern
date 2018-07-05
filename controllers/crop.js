const mongoose = require('mongoose');
const Crop =  mongoose.model('crops');

exports.getCrops = async function(req, res) {
    const crops  = await Crop.find({ status: true }); 

    res.send(crops);
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

exports.deleteCrop = async function(req, res) {
    let response  = await Crop.findByIdAndRemove( req.params.id ); 

    if(req.params.id == response._id) {
        response = await Crop.find({ status: true });
    }

    res.send(response);
}