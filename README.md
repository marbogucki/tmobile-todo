This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project setup

1. clone this repository
2. run "npm i" from the root of the repo to install all dependencies

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Project folder structure/ design

Project fallows the atomic design principle where components are grouped as:

- atmos - smallest units. Components that are not composed from other components i.e: buttons, inputs, loaders, headers
- normal components - larger units that are usually composed from smaller components i.e: form, navbar, listing
- layouts - groups of normal components that are organised to create a specific layout i.e a grid with columns of listing elements, a banner with multiple components
- pages - whole page views created out of layouts, components or atoms

More on atomic design:
https://bradfrost.com/blog/post/atomic-web-design/

## Frameworks/ libraries used:

- emotion.js - for css-in-js styling
  https://emotion.sh/docs/introduction

- react-router-dom - for SPA routing
  https://www.npmjs.com/package/react-router-dom

- axios - for HTTP requests
  https://github.com/axios/axios
