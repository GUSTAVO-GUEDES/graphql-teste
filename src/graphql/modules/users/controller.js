import User from '../../../models/User';

const UserController = {
    users: () => User.find(),
    getUserById: (id) => User.findById(id),
    getUserByEmail: (email) => User.findOne({ email: email }),
    createUser: (data) => User.create(data),
    updateUser: (id, data) => User.findOneAndUpdate(id, data, { new: true }),
    deleteUser: async (id) => !!(await User.findOneAndDelete(id))
};

export default UserController;