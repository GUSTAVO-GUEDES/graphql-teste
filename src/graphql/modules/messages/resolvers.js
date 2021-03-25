import MessageController  from './controller';

export default {
    Query: {
        getMessagesByInteractionCardId: (_, { id }) => MessageController.getMessagesByInteractionCardId(id)
    },
    Mutation: {
        createMessage: (_, { data }) => MessageController.createMessage(data),
        updateMessage: (_, { id, data }) => MessageController.updateMessage(id, data),
        deleteMessage: async (_, { id }) => await MessageController.deleteMessage(id)
    }
};