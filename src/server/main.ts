import { bootstrap } from 'solum/dist/application';
import { route as sms_routes } from './sms';

const { app } = bootstrap();

app.use('/sms', sms_routes);

app.get('/', (req, res) =>
    res.render('index', {}));
