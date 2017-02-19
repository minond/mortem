import { Router, Request, Response } from 'express';
import * as gen_response from 'twilio/lib/TwimlResponse';

export const router = Router();

router.post('/reply', (req: Request, res: Response): void => {
    let response = gen_response();
    let message = gen_response();

    message.topLevel = false;
    message.name = 'Message';
    message.text = 'Hello, Mobile Monkey';
    response.children.push(message);

    /* console.log(req); */
    console.log(req.body);
    /* console.log(req.headers); */
    /* console.log(req.query); */
    /* console.log(req.params); */
    res.header('Content-Type', 'text/xml');
    res.end(response.toString());
});
