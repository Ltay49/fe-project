# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

1. set up react router, i find this easier to do at the start as later on it it could get confusing. My header and footer sit outise the the router as they are constants, in my app they wont re render. My home page is set to "/".

2. MainPage - i have set the articles state as an empty array, the articles will be set to the data fetched from my API https://be-nc-news-lt-1.onrender.com/api/articles.
This presents a full list. I i will only present an image, a title, an author, a created date and read me button which will direct the page to the full article. As good pratice i always set up a loading state which tracks the 'movement' of teh axios request, once it is all there this state will return to false.

3.