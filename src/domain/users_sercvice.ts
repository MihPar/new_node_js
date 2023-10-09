import { usersRepositiries } from './../repositories/user_db_repositories';
import { UserDBType } from "../repositories/db"
import bcrypt from 'bcrypt'
import {ObjectId} from 'mongodb'

export const usersService = {
	async createUser(login: string, email: string, password: string): Promise<UserDBType> {
		const passwordSalt = await bcrypt.genSalt(10)
		const passwordHash = await this._generateHash(password, passwordSalt)

		const newUser: UserDBType = {
			_id: new ObjectId(),
			userName: login,
			email,
			passwordHash,
			passwordSalt,
			createdAt: new Date()
		}		
		return usersRepositiries.createUser(newUser)

		
	},
	async checkCredentials(loginOrEmail: string, password: string) {
		const user: any = await usersRepositiries.findByLoginOrEmail(loginOrEmail)
		if(!user) return false
		const passwordHash = await this._generateHash(password, user.passwordSalt)
		if(user.Passwordhash !== passwordHash) {
			return false
		} 
		return true
	},
	async _generateHash(password: string, salt: string) {
		const hash = await bcrypt.hash(password, salt)
		console.log('hash', hash)
		return hash
	},
}
