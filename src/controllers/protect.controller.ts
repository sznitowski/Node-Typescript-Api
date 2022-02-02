 import {Request, Response} from 'express'

export const protect = (req: Request, res: Response) => {
  return res.json({ msg: `Hey ${req.body.email}!` });
}; 