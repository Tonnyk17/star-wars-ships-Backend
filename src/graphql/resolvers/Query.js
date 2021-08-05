import Message from '../../models/Images';

const Query = {
    ping() {
        return 'pong'
    },
    films: async() => {
        return await Message.find()
    }
}

export default Query;