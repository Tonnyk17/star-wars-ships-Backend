import {Schema, model} from 'mongoose';

const imageSchema = new Schema({
    EpisodeID: {
        type: String,
        required: true
    },
    src: {
        type: String,
        required: true
    },
    ships:{
        type: [shipImage],
        required: true
    }
});
const shipImage = new Schema({
    id:{
        type: String,
        required: true
    },
    name:{
        type: String,
        required: false
    },
    url: {
        type: String,
        required: true
    }
})
export default model('Message',imageSchema)