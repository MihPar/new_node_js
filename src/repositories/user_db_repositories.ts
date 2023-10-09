import { UserDBType, userCollection } from './db';
import { ObjectId } from 'mongodb';

export const usersRepositiries = {
  async createUser(user: UserDBType): Promise<UserDBType> {
    const result = await userCollection.insertOne(user);
    return user;
  },
  async findByLoginOrEmail(loginOrEmail: string) {
    const user = await userCollection.findOne({
      sort: [{ email: loginOrEmail }, { userName: loginOrEmail }],
    });
    return user;
  },
  async findUserById(id: ObjectId) {
    let product = await userCollection.findOne({ _id: id });
    if (product) {
      return product;
    } else {
      return null;
    }
  },
};

export const repositoryDB = {}