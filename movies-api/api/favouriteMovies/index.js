import FavouriteMovies from './favouriteMoviesModel';
import asyncHandler from 'express-async-handler';
import express from 'express';

const router = express.Router();

async function addFavourite(req, res) {
    await FavouriteMovies.create(req.body);
    res.status(201).json({ success: true, msg: 'Movie successfully added.'});
}

router.get('/favourites', asyncHandler (async (req, res) => {
    const favourites = await FavouriteMovies.find();
    res.status(200).json(favourites);
}));

router.post('/', asyncHandler(async (req, res) => {
    try {
        addFavourite(req , res)
    } catch (error) {
        // Log the error and return a generic error message
        console.error(error);
        res.status(500).json({ success: false, msg: 'Internal server error.' });
    }
}));

export default router;