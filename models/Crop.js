const mongoose = require('mongoose');
const { Schema } = mongoose;

const cropSchema = new Schema({
    title: { type: String, required: true },
    slug: { type: String, required: true, lowercase: true },
    status: { type: Boolean, default: true },
    created_at: Date,
    updated_at: Date    
});

mongoose.model('crops', cropSchema);
