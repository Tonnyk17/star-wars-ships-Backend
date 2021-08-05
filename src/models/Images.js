import {Schema, model} from 'mongoose';

const imageSchema = new Schema({
    title: {
        type: String,
        required: true
    }
})

export default model('Message',imageSchema)