import { UserDBType, userCollection } from './db';

export const usersRepositiries = {
  async createUser(user: UserDBType): Promise<UserDBType> {
	const result = await userCollection.insertOne(user)
    return user
  },
  async findByLoginOrEmail(loginOrEmail: string) {
	const user = await userCollection.findOne({sort: [{email: loginOrEmail}, userName: loginOrEmail]})
	return user
  }
};

export const repositoryDB = {}