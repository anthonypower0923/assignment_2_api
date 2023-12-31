import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
import users from './users';
import movies from './movies';
import shows from './shows';
import User from '../api/users/userModel';
import Movie from '../api/movies/movieModel';
import FavouriteMovies from '../api/favouriteMovies/favouriteMoviesModel';
import FavouriteShows from '../api/favouriteShows/favouriteShowsModel';
import Show from '../api/shows/showModel';

async function main() {
    if (process.env.NODE_ENV !== 'development') {
        console.log('This script is only for the development environment.');
        return;
    }
    await mongoose.connect(process.env.MONGO_DB);
    // Drop collections
    await User.collection.drop().catch(err => console.log('User collection not found'));
    await Movie.collection.drop().catch(err => console.log('Movie collection not found'));
    await FavouriteMovies.collection.drop().catch(err => console.log('Favourite Movies collection not found'));
    await Show.collection.drop().catch(err => console.log('Shows collection not found'));
    await FavouriteShows.collection.drop().catch(err => console.log('Favourite Shows collection not found'));
    await User.create(users);
    await Movie.create(movies);
    await Show.create(shows);
    await FavouriteMovies.create()
    await FavouriteShows.create()
    console.log('Database initialised');
    console.log(`${users.length} users loaded`);
    console.log(`${movies.length} movies loaded`);
    console.log(`${shows.length} shows loaded`);
    await mongoose.disconnect();
}

main();