import { router } from 'solum/dist/application';
import { response, message } from '../sms/response';

export const route = router();

route.post('/log', (req, res) => {
    let reply = response(message('hihihi'));

    console.log(req.body);

    res.header('Content-Type', 'text/xml');
    res.end(reply.toString());
});
