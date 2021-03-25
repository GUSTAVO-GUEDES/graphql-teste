import Message from '../../../models/Message';

const MessageController = {
    getMessagesByInteractionCardId: (id) => Message.find({InteractionCard: id}),
    createMessage: (data) => Message.create(data),
    updateMessage: (id, data) => Message.findOneAndUpdate(id, data, { new: true }),
    deleteMessage: async (id) => !!(await Message.findOneAndDelete(id))
};

export default MessageController;