import Message from '../../models/Images';

const Mutation = {

    createFilm : async(_, {title}) => {
        const newMessage = new Message({title})
        console.log(newMessage);
        await newMessage.save();
    }

};

export default Mutation;