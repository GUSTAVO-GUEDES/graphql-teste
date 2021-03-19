import IntCardController from './controller';

export default {
    Query: {
        InteractionCards: async () => await IntCardController.InteractionCards(),
        getInteractionCardsByUserId: async (_, { id }) => await IntCardController.getInteractionCardsByUserId(id)
    },
    Mutation: {
        createInteractionCard: async (_, { data }) => await IntCardController.createInteractionCard(data),
        updateInteractionCard: async (_, { data }) => await IntCardController.createInteractionCard(data),
        deleteInteractionCard: async (_, { id }) => !!(await IntCardController.findOneAndDelete(id))
    }
};