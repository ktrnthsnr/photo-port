# React notes

1.  Install the Create React App (CRA) CLI, which will add webpack config and create a dev server.
    $ `npx create-react-app photo-port`

2. Open within the browser and run the following. CRA will create a webpack to bundle up and run a dev server, and service worker in the index.js. Also uses Babel to tranpile ES6 to ES5.

- $ `cd photo-port`
- $ `npm start`

- View the dev React app server with code compiled at  `http://localhost:3000/`

- Note, to turn the initial feature off, update `BROWSER=none` when running `npm start`

3. The public folder will appear as follows: public-cra.jpg. 
You can remove files not used, such as src/logo.svg and app.test.js.

4. Asset and helpers code was provided for this project, added to public/src/*

5. 



0. Here are commands that can be used as per package.json

        "scripts": {
            "start": "react-scripts start",
            "build": "react-scripts build",
            "test": "react-scripts test",
            "eject": "react-scripts eject"
    

    `npm start`
        Starts dev server

    `npm run build`
        Bundles app to static files for prod

    ` npm test`
        Starts test runner

    `npm run eject`
        Removes the create-react-app tool

            