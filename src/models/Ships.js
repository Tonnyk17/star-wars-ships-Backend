import {Schema, model} from 'mongoose';

const shipSchema = new Schema({
    id: {
        type: String,
        required:false
    },
    image:{
        type: String,
        required:false
    },
    name: {
        type: String,
        required: false
    },
    model:{
        type: String,
        required: false
    },
    starshipClass: {
        type: String,
        required: false
    },
    manufacturers: {
        type: [String],
        required: false
    },
    costInCredits: {
        type: String,
        required: false
    },
    length:{
        type: Number,
        required: false 
    },
    crew:{
        type: String,
        required: false
    },
    passengers: {
        type: String,
        required: false
    },
    maxAtmospheringSpeed: {
        type: Number,
        required: false
    },
    movies: {
        type: [String],
        required: false
    }

})

export default model('Ships',shipSchema)