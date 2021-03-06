import User from '../../../models/User'

export async function ReturnUsersData(usersIDs){
    return await usersIDs.map(async (userId) => {
        return await User.findById(userId);
    });
};

export async function ReturnUsersBasicData(usersIDs){
    return await usersIDs.map(async (userId) => {
        return await User.findOne({_id: userId}, { name:1 });
    });
};