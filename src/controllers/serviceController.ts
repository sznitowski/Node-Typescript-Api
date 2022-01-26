import { Request, Response } from 'express';

class ServiceController {

    public index (req: Request, res: Response) {
        res.render('main', { title: 'Welcome to Services App'});        
    }

}

export const serviceController = new ServiceController();