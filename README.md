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

### `npm test`

Runs a task runner running all tests on save

### `npm run storybook`

Runs a a page with all documented components in the browser

## Project folder structure/ design

Project fallows the atomic design principle where components are grouped as:

- root - root of the application. First file that is mounted in the DOM by ReactDOM.render mehtod and all files related to it

- atmos - smallest units. Components that are not composed from other components i.e: buttons, inputs, loaders, headers

- normal components - larger units that are usually composed from smaller components i.e: form, navbar, listing

- layouts - groups of normal components that are organised to create a specific layout i.e a grid with columns of listing elements, a banner with multiple components

- pages - whole page views created out of layouts, components or atoms

Other folders:

- utils - re-usable functions, often used algorithms or chunks of code that are good to generally abstract away to keep the code clean and readable i.e sortItems

- auth - objects keeping data on authentication. Like HTTP call headers, passwords etc (in production probably this would be in its own private repo for security reasons)

- context - project uses context api for data store. This folder holds things like contextProviders, functions and hooks related to the context itself.

More on atomic design:
https://bradfrost.com/blog/post/atomic-web-design/

## Single component structure:

- <ComponentName>.js - file with the component and all data related to it.
- style - holding one or multitple files with component styles. Components are styled using CSS-in-JS therefore those are stored in objects
- '_tests_' all tests related to this component

## Frameworks/ libraries used:

- emotion.js - for css-in-js styling
  https://emotion.sh/docs/introduction

- react-router-dom - for SPA routing
  https://www.npmjs.com/package/react-router-dom

- axios - for HTTP requests
  https://github.com/axios/axios

- jest/jest-dom - for unit testing

- storybook - for documenting the visual components in react
  https://storybook.js.org/
