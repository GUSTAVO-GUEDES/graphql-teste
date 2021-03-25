import UserController from './controller';

export default {
    Query: {
        users: () => UserController.users(),
        getUserById: (_, { id }) => UserController.getUserById(id),
        getUserByEmail: (_, { email }) => UserController.getUserByEmail(email)
    },
    Mutation: {
        createUser: (_, { data }) => UserController.createUser(data),
        updateUser: (_, { id, data }) => UserController.updateUser(id, data),
        deleteUser: async (_, { id }) => await UserController.deleteUser(id)
    }
};