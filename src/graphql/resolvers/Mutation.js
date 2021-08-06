import Ships from '../../models/Ships';

const Mutation = {

    createShip: async(_, {id,image,name,model,starshipClass,manufacturers,costInCredits,length,crew,passengers,maxAtmospheringSpeed,movies}) => {
        const newShips = new Ships({id,image,name,model,starshipClass,manufacturers,costInCredits,length,crew,passengers,maxAtmospheringSpeed,movies})
        console.log(newShips);
        await newShips.save();
    },
    removeShip: async(_,{id}) => {
        await Ships.findOneAndDelete({id})
    }

};

export default Mutation;