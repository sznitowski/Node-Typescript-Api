import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import passport from 'passport';
import passportMiddleware from './middlewares/passport';

import authRoutes from './routes/auth.routes';
import protectRoutes from './routes/protect.routes'

//init
const app = express();

//settings
app.set('port', process.env.PORT || 5000);

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.use(passport.initialize());
passport.use(passportMiddleware);

//routes
app.get('/', (req, res) => {
    res.send(`The api is at http://localhost:${app.get('port')}`)
});

app.use(authRoutes);
app.use(protectRoutes);

export default app;