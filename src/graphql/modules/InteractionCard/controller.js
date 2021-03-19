import InteractionCard from '../../../models/InteractionCard';
import { ReturnUsersData } from '../users/utils';

const IntCardController = {
    InteractionCards: async () => {
        const qry = await InteractionCard.find();

        const returnItnCard = await qry.map(async (IntCard) => {
            IntCard.usersJoin = await ReturnUsersData(IntCard.usersJoin);
            return IntCard
        });

        return Array.isArray(returnItnCard) ? returnItnCard:[returnItnCard];
    },

    getInteractionCardsByUserId: async (id) => {
        const qry = await InteractionCard.findOne({ usersJoin: id });
        qry.usersJoin = await ReturnUsersData(qry.usersJoin);

        return Array.isArray(qry) ? qry:[qry];
    },

    createInteractionCard: async (data) => {
        const qry = await InteractionCard.create(data);
        qry.usersJoin = await ReturnUsersData(qry.usersJoin);

        return qry;
    },

    updateInteractionCard: async (id, data) => {
        const qry = await InteractionCard.findOneAndUpdate(id, data, { new: true });
        qry.usersJoin = await ReturnUsersData(qry.usersJoin);

        return qry;
    },

    deleteInteractionCard: async (id) => !!(await InteractionCard.findOneAndDelete(id))
};

export default IntCardController;