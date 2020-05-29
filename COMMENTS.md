![logos](https://image.ibb.co/m8S9ew/react.jpg)

TheMovieDB

A ReactJs platform by Gianni Cellura

Frontend Challenge v1.0 for Global Gaming



### Get started!
```
npm i
```

### Start the dev server:
```

npm start

```

### Build:
```

npm run build

```

### Considerations
I used create react app to start from scratch the project. Then, after installed all package through NPM I begine to configure webpack to obtain some technical specifications.
All typescript code is bundle.js, all SCSS in bundle.css and all images used in SCSS generated and renamed in /dist directory.
To watch the built platform you can use localhost:1805 , a custom port that i set in webpack.config.js

I configured react with redux following some documentation, so, i created a dir for actions, reducers, and also for api component that is lib/ .

First of all i began to project how many sections site must have, structured with a classical header, page, footer. I tried to realize a simple navigable website, with an input search in header, that would be present in all pages, and container managed through the use of react-router. So installed react-router and start to create pages and structure. 
If use router you must interface this with redux flow, i used .withRouter and connect. 
To obtain an object with movies, i studied API TMDB.org documentation and create a personale API_KEY to let api working. I saw the structure of JSON. So,the homepage shows a list of 20 movies receiving data from TMDB, every item contains all informations about movie and for convenience to show only image/title/description in the list.
Clicking on single movie you go to detail page that is linked at /movie/:movie_id . When you click from homepage it opens the detail page and shows movie's datas reading an object passed through Props, it let us to not consume a call to api to obtain details data, but, of course, if you click for example a link received through a social from a friend, it opens directly the detail page that has no data in props. So, if so, i make a call to detail api service to obtain informations.
For immediate use, the search is realized with an autocomplete component that calls the search API of TMDB, showing a list of movies, when you click on a choosen title, it redirects to detail page, but in this case it makes a call to API (but also in this way could be possible to pass datas to detail page and not consume a call).
In the homepage there's also a call to TMDB API to obtain a list of all movie genres and show that in a select/option, so if you click on a single genre it filters data and modifies this.state.results that is used in rendering to show the movie list, filtered or not.
In testing autocomplete i discover that if you click out of the autocomplete list or select a title, the list still remained visible, so i used some trick to find where the user clicks and in case of clicking out, autocomplete list disappears.
I created some actions and reducer, some of them simply insert in props what the user have done, in others, i stored datas (for example movieList or movieDetail object) to send them to clicked page, don't know if it's a best practice, but it works :-)
For images i used (only 2) i've choosen to use SVG, because they are editable, and let you to create also some animations that could be an idea in a implementation case.
In index.html i just inserted some icons for favicon. I edited all CSS about header, footer, and page container, simple inserted an example media query to modify the behaviour of header, considering two sizes but of course it should be in a deep way.

###What should i do if a real project
Of course a lot of steps have been ignored for this challenge. I would have realized for example a 404 page, a better meta tags for SEO, metatags for sharing on social with automatic image and text preview readable by social spiders, a more accurate and exciting graphics (if there's no a preset draft to follow), graphic test for mobile devices, paying special attention to apple devices that always surprise me for some abnormal behaviour, and on Safari browsers that have some problems with some working code (for example in downloading files by blob).


