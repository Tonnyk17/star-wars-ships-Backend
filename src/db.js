import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://Mr_Robot:Patata123@cluster0.flfdt.mongodb.net/test",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('Database is connected'))
.catch(err => console.log(err));