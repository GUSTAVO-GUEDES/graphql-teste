import InteractionCard from '../../../models/InteractionCard';
import { ReturnUsersBasicData } from '../users/utils';

const IntCardController = {
    InteractionCards: async () => {
        const qry = await InteractionCard.find();

        const returnItnCard = await qry.map(async (IntCard) => {
            IntCard.usersJoin = await ReturnUsersBasicData(IntCard.usersJoin);
            return IntCard
        });

        return Array.isArray(returnItnCard) ? returnItnCard:[returnItnCard];
    },

    getInteractionCardsByUserId: async (id) => {
        const qry = await InteractionCard.find({ usersJoin: id });

        const returnQry = await qry.map(async (IntCard) => {
            IntCard.usersJoin = await ReturnUsersBasicData(IntCard.usersJoin);
            return IntCard
        });
        
        return Array.isArray(returnQry) ? returnQry:[returnQry];
    },

    createInteractionCard: async (data) => {
        const qry = await InteractionCard.create(data);
        qry.usersJoin = await ReturnUsersBasicData(qry.usersJoin);

        return qry;
    },

    updateInteractionCard: async (id, data) => {
        const qry = await InteractionCard.findOneAndUpdate(id, data, { new: true });
        qry.usersJoin = await ReturnUsersBasicData(qry.usersJoin);

        return qry;
    },

    deleteInteractionCard: async (id) => !!(await InteractionCard.findOneAndDelete(id))
};

export default IntCardController;