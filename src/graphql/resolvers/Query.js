import Message from '../../models/Images';
import Ships from '../../models/Ships';

const Query = {
    films: async() => {
        return await Message.find()
    },
    ship: async() => {
        return await Ships.find();
    }
}

export default Query;