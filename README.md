# Assignment 2 - Web API.

Name: Anthony Power

## Features.

A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** (or modifications to existing features)
 
 + Added favouriteMovies collection with relevant get , post and delete methods 
 + Added shows collection with get methods for collection alongside relevant methods proxying data from tmdb
 + Added authentication on the favourite movies and shows routes
 + Shows collection is created and populated on api startup

## Setup requirements.

For the react app after cloning and installing the app using npm a .env file needs to be created with the relevant data,
______________________
REACT_APP_TMDB_KEY=<TMDB API KEY>
FAST_REFRESH=false
______________________

## API Configuration

Describe any configuration that needs to take place before running the API. For example, creating an `.env` file and what variables to put in it. Give an example of how this might be done.

REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:

After clonimg a .env file needs to created with the following information
______________________
NODE_ENV=development
PORT=8080
HOST=localhost
MONGO_DB=mongodb://localhost:27017/movies_db
TMDB_KEY=2625fbb6128fce1b3b4bd85203acfe7c
SECRET=ilikecake
______________________

Alongside this a .babelrc file needs to created with the following content
______________________
{
    "presets": ["@babel/preset-env"]
}
______________________

A file called .eslintrc.json will need to be created/altered with the following content
______________________
{
    "env": {
        "node": true,
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "semi": 1,
        "no-console": "off"
    }
}
______________________

Finally the scripts section of the generated package.json file needs to altered to,
______________________
"scripts": {
    "start": "babel-node index.js",
    "dev": "babel-node ./initialise-dev/initDevDB.js && nodemon --exec npm start"
  },
______________________

## API Design
Give an overview of your web API design, perhaps similar to the following: 

- /api/movies | GET | Gets a list of movies from collection
- /api/movies/{movieid} | GET | Gets a single movie 
- /api/movies/tmdb/upcoming | GET | Gets list of upcoming movies 
- /api/movies/tmdb/genres | GET | Gets list of movie genres
- /api/favouritemovies/ | GET | Gets list of favourite movies from collection
- /api/favouritemovies/ | POST | Add a movie to favouriteMovies collection
- /api/favouritemovies/{movieId} | DELETE | Delete a movie from favouriteMovies collection
- /api/shows | GET | Gets a list of shows from collection
- /api/shows/tmdb/trending | GET | Gets list of trending shows 
- /api/shows/tmdb/genres | GET | Gets list of show genres
- /api/favouriteShows/ | GET | Gets list of favourite shows from collection
- /api/favouriteShows/ | POST | Add a show to favouriteShows collection
- /api/favouriteShows/{showId} | DELETE | Delete a show from favouriteShows collection

## Security and Authentication

Give details of authentication/security implemented on the API (e.g. passport/sessions). Indicate which routes are protected.

Authentication is done using JSON web tokens and Passport.js for authentication. When a user logs into the api they are granted a BEARER Token. This token is checked when accessing protected routes such as the favourite movies and shows routes. If a user signsout they lose their token and must gain a new one by logging in. 

## Integrating with React App

Describe how you integrated your React app with the API. List the views that use your Web API instead of the TMDB API. Describe any other updates to the React app from Assignment One.

The folowing views use the Web API instaed of the TMDB API.
______________________
/
/login
/signup
/movies/upcoming
/movies/favorites
/tv/discover
/tv/trending
/tv/favorite
______________________

Another change that was made was the /movies/favourites route was protected from users who were not logged in. The same was attempted with the /tv/favorite route but as with how the routes are configured said route could not retrieve the data to dispaly from the TVContextProvider while existing inside the the protected routes element. The retrieving of data for this route still requires authentication so it is advised to login before accessing this route to avoid errors.

Finally as eluded to the authContext and protected routes from the labs were integrated into app to provide checks for authentication and the loging in and signing up of users for the relevant methods.
