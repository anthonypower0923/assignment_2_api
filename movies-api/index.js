// Comment so I can commit
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import usersRouter from './api/users';
import './db';
import defaultErrHandler from './errHandler'
import moviesRouter from './api/movies';   //import movies router
import authenticate from './authenticate';
import favouritesRouter from './api/favouriteMovies';
import showsRouter from './api/shows';
import favouriteShowsRouter from './api/favouriteShows'

dotenv.config();

const app = express();
const port = process.env.PORT; 

app.use(cors());
app.use(express.json());
app.use('/api/users', usersRouter);
app.use('/api/movies',  moviesRouter);
app.use('/tmdb/upcoming',  moviesRouter);
app.use('/api/favouriteMovies', authenticate, favouritesRouter);
app.use('/api/shows' , showsRouter)
app.use('/api/favouriteshows', authenticate , favouriteShowsRouter)
app.use(defaultErrHandler);

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});