import * as express from 'express';
import { static as serve } from 'express';
import { setDefaults as swig_config, renderFile as render } from 'swig';

import * as config from 'acm';
import * as dotenv from 'dotenv';
import * as favicon from 'serve-favicon';

const app = express();

dotenv.config({ silent: true });
app.set('x-powered-by', false);
app.set('view cache', true);
app.set('view engine', 'html');
app.set('views', './assets/views');
app.engine('html', render);

if (config('debug')) {
    app.set('view cache', false);
    swig_config({ cache: false });
}

app.use('/assets', serve('assets'));
app.use('/dist', serve('dist'));
app.use('/node_modules', serve('node_modules'));
app.use(favicon('./assets/images/favicon.ico'));

app.get('/', (_req, res) =>
    res.render('index', {}));

app.listen(config('port'));
