import { Router, Request, Response } from 'express';
import { response, message } from '../sms/response';

export const router = Router();

router.post('/log', (req: Request, res: Response): void => {
    let reply = response(message('hihihi'));

    console.log(req.body);

    res.header('Content-Type', 'text/xml');
    res.end(reply.toString());
});
