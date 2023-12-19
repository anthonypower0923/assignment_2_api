import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const FovouritesSchema = new Schema({
        adult: { type: Boolean },
        backdrop_path: { type: String },
        genre_ids: {type: Array},
        id: { type: Number, unique: true },
        original_language: { type: String },
        original_title: { type: String },
        overview: { type: String },
        popularity: { type: Number },
        poster_path: { type: String },
        release_date: { type: String },
        title: { type: String },
        video: {type: Boolean},
        vote_average: { type: Number },
        vote_count: { type: Number }
}) 

export default mongoose.model('FavouriteMovies', FovouritesSchema);

