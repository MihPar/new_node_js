import { UserDBType } from './../repositories/db';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { ObjectId } from 'mongodb';

dotenv.config()

export const jwtService = {
	async createJWT(user: UserDBType) {
		const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET || '123', {expiresIn: '1h'})
		return token
		},
	async getUserIdByToken(token: string) {
		try {
			const result: any = jwt.verify(token, process.env.JWT_SECRET || '123')
			return new ObjectId(result.userId)
		} catch(err) {
			return null
		}
	}
}