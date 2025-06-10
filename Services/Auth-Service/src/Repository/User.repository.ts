import { RoleModel } from '../Models/Role.model';
import { UserAttributes, UserCreatinAttributes, UserModel } from '../Models';
import { Transaction } from 'sequelize';

export class UserRepository {
    // Query to create user
    static create(user: UserCreatinAttributes, transaction?: Transaction): Promise<UserAttributes> {
        
        return UserModel.create(user, { transaction });
    }

    // Query to get all the users with pagination
    static async getAllUsers({ page = 1, limit = 10 }) {
        const [users, totalUsers] = await Promise.all([
            UserModel.findAll({
                where: { isDeleted: false, isActive: true },
                offset: (page - 1) * limit,
                limit,
            }),
            UserModel.count({
                where: { isDeleted: false, isActive: true },
            }),
        ]);
        return { users, count: totalUsers };
    }

    // Query to get user by email
    static findUserByEmail(email: string, transaction?: Transaction): Promise<UserAttributes | null> {
        return UserModel.findOne({
            where: { email },
            include: [{ model: RoleModel, as: 'roleData' }],
            transaction,
        });
    }

    // Query to get user by primary key
    static findUserByPK(id: string): Promise<UserAttributes | null> {
        return UserModel.findByPk(id);
    }

    // Query to remove user
    static destroy(email: string) {
        return UserModel.destroy({ where: { email } });
    }

    // Query for soft delete of user
    static removeUser({ email, isActive, isDeleted }: { email: string; isActive: boolean; isDeleted: boolean }) {
        return UserModel.update({ isActive, isDeleted }, { where: { email } });
    }

    // Query to update user by email
    static update({ email, isActive, isDeleted }: { email: string; isActive: boolean; isDeleted: boolean }) {
        return UserModel.update({ isActive, isDeleted }, { where: { email } });
    }
}
