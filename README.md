# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisites

Local development was done with `v18.16.0` version of Node. Issues might arise
if newer Node is used.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Deployment guide

To deploy the react app you need a Compute Engine instance configured. (Persistent disk storage and HTTP traffic enabled are needed)

One time configuration steps :

- sudo apt-get update (updating the packages)

- sudo apt-get upgrade (upgrade the packages)

- sudo apt-get install nginx (installing nginx)

- curl -fsSL https://deb.nodesource.com/setup_17.x | sudo -E bash - (add NodeSource repo)
- sudo apt-get install -y nodejs (installing node js)

### These steps are repeated everytime rbc-library-ui main branch is updated:

- git clone [repo-url] (clone the repo)

- npm i (install node modules)

- npm run build:prod (build the react app)

- make the app-deploy folder in the root directory and copy contents of the build folder to it

- sudo service nginx reload (restart nginx to preview changes)

#### Nginx config file that needs to be created

File path /etc/nginx/conf.d/react.conf

```
server {
  listen 80;
  listen [::]:80;
  root /home/ubuntu/app-deploy/build;
  location / {
    try_files $uri /index.html;
  }
}
```

If a default nginx page is displayed, comment out the line

```
#       include /etc/nginx/sites-enabled/*;
```

in the nginx.conf file, in order to show the React app.

## Mocking of fetch requests for local development

The module `mock service worker` (https://github.com/mswjs/msw) is configured and allows us to mock specific fetch requests used in `rbc-library-ui`.
To activate it for local development you have to enable the environment variable `REACT_APP_MSW_MOCKING_ENABLED`.
The configuration of specific fetch request mocks is structured in `msw/handlers.ts`.
