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
