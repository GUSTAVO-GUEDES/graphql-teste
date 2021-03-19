import User from '../../../models/User';

export default {
    Query: {
        users: () => User.find(),
        getUserById: (_, { id }) => User.findById(id),
        getUserByEmail: (_, { email }) => User.findOne({ email: email })
    },
    Mutation: {
        createUser: (_, { data }) => User.create(data),
        updateUser: (_, { id, data }) => User.findOneAndUpdate(id, data, { new: true }),
        deleteUser: async (_, { id }) => !!(await User.findOneAndDelete(id))
    }
};