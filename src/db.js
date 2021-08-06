require('dotenv').config();
import mongoose from 'mongoose';


mongoose.connect(process.env.DB_KEY,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('Database is connected'))
.catch(err => console.log(err));