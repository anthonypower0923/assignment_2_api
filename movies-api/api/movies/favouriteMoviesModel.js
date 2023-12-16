import mongoose from 'mongoose';
import movieModel from './movieModel';

const Schema = mongoose.Schema;

const FovouritesSchema = movieModel.schema

export default mongoose.model('FavouriteMovies', FovouritesSchema);

