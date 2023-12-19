import showModel from './showModel';
import asyncHandler from 'express-async-handler';
import express from 'express';
import { getTrendingShows } from '../tmdb-api';
import { getShowGenres } from '../tmdb-api';

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    let { page = 1, limit = 10 } = req.query; // destructure page and limit and set default values
    [page, limit] = [+page, +limit]; //trick to convert to numeric (req.query will contain string values)

    const [total_results, results] = await Promise.all([
        showModel.estimatedDocumentCount(),
        showModel.find().limit(limit).skip((page - 1) * limit)
    ]);
    const total_pages = Math.ceil(total_results / limit); //Calculate total number of pages (= total No Docs/Number of docs per page) 

    //construct return Object and insert into response object
    const returnObject = {
        page,
        total_pages,
        total_results,
        results
    };
    res.status(200).json(returnObject);
}));

router.get('/tmdb/trending', asyncHandler(async (req, res) => {
    const trendingShows = await getTrendingShows();
    res.status(200).json(trendingShows);
}));

router.get('/tmdb/genres', asyncHandler(async (req, res) => {
    const showGenres = await getShowGenres();
    res.status(200).json(showGenres);
}));

export default router;