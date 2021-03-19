import Message from '../../../models/Message';

export default {
    Query: {
        getMessagesByTalkGroupId: (_, { id }) => Message.find({TalkGroup: id})
    },
    Mutation: {
        createMessage: (_, { data }) => Message.create(data),
        updateMessage: (_, { id, data }) => Message.findOneAndUpdate(id, data, { new: true }),
        deleteMessage: async (_, { id }) => !!(await Message.findOneAndDelete(id))
    }
};