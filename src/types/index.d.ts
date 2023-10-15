import { UserDBType } from '../repositories/db';

declare global {
	namespace Express {
		export interface Request {
			user: UserDBType | null
		}
	}
}