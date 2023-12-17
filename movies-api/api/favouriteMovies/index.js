import FavouriteMovies from './favouriteMoviesModel';
import asyncHandler from 'express-async-handler';
import express from 'express';

const router = express.Router();

async function addFavourite(req, res) {
    await FavouriteMovies.create(req.body);
    res.status(201).json({ success: true, msg: 'Movie successfully added.'});
}

router.get('/', asyncHandler (async (req, res) => {
    const favourites = await FavouriteMovies.find();
    res.status(200).json(favourites);
}));

router.delete('/:id', asyncHandler ( async (req, res) => {
    if (req.body.id) delete req.body.id;
    const result = await FavouriteMovies.deleteOne({
        id: req.params.id,
    });
    if (result.deletedCount) {
        res.status(204).json({code: 204, msg: 'Movie successfully deleted' });
    } else {
        res.status(404).json({ code: 404, msg: 'Unable to find movie' });
    }
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