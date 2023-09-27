import { body, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from "express"

export const titleValidation = body('title').isString().isLength({min: 5, max: 30}).withMessage('Title should be length from 5 to 30 symbols')

export const inputValidationMiddleWare = (req: Request, res: Response, next: NextFunction) => {
	const errors = validationResult(req)
	if(!errors.isEmpty()) {
		res.status(400).json({errors: errors.array()})
	} else {
		next()
	}
}