import mongoose from 'mongoose';;

const Schema = mongoose.Schema;

const FavouriteShowsSchema = new Schema({
    backdrop_path: { type: String },
    first_air_date: { type: String },
    genre_ids: {type: Array},
    id: { type: Number },
    name: { type: String },
    origin_country: {type: Array},
    original_language: { type: String },
    original_name: { type: String },
    overview: { type: String },
    popularity: {type: Number},
    poster_path: { type: String },
    vote_average: {type: Number},
    vote_count: {type: Number}
});

export default mongoose.model('FavouriteShows', FavouriteShowsSchema);