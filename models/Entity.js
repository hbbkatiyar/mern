const mongoose = require('mongoose');
const { Schema } = mongoose;

const entitySchema = new Schema({
    title: String,
    size: String,
    unit: { type: Number, default: 1 },
    type: { type: Number, default: 1 },
    amount: { type: Number, default: 0 },
    subtype: { type: Number, default: 2 },
    person_involved: { type: Number, default: 1 },
    status: { type: Boolean, default: true },
    created_at: Date,
    updated_at: Date    
});

mongoose.model('entities', entitySchema);
