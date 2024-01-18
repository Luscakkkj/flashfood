import 'dotenv/config';
import express from 'express';
import path from './utils/path';
import edge_template from 'express-edge';
import session from "express-session";
import flash from "connect-flash";
import sequelizeDB from './database/models/index';
import {Routes} from './routes/index';
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.public));
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
}))
app.use(flash())
app.use(edge_template);
app.set('views', path.views);

app.use('/', Routes.PagesRoute);
app.use('/api/auth', Routes.AuthRoutes)
app.use((_, res) => res.status(404).send('<h1>ERROR 404</404>'));
app.listen(8000, () => {
  console.log('http://localhost:8000');
  sequelizeDB;
});
