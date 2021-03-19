import TalkGroup from '../../../models/TalkGroup';
import User from '../../../models/User';

export default {
    Query: {
        TalkGroups: () => TalkGroup.find(),
        getTalkGroupsByUserId: (_, { id }) => TalkGroup.find({ usersJoin: id })
    },
    Mutation: {
        createTalkGroup: async (_, { data }) => {
            const newTalkGroup = await TalkGroup.create(data);

            const usr = await newTalkGroup.usersJoin.map(async (userId) => {
                const findUser = await User.findById(userId);

                return {
                    _id: findUser._id,
                    name: findUser.name,
                    email: findUser.email,
                    active: findUser.active
                };
            });

            return {
                _id:newTalkGroup._id, 
                name: newTalkGroup.name, 
                usersJoin: usr, 
                active: newTalkGroup.active
            };
        },
        updateTalkGroup: (_, { id, data }) => TalkGroup.findOneAndUpdate(id, data, { new: true }),
        deleteTalkGroup: async (_, { id }) => !!(await TalkGroup.findOneAndDelete(id))
    }
};