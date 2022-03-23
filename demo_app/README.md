# demo_app

a demo app for learning

## running locally

(These instructions assume you have a node v8.x+ and npm v6.x+ installed.)

1. Clone this repo: `git clone git@github.com:stitchfix/demo_app_v2.git`
1. Install the dependencies: `npm install`
1. Start the app in local dev mode: `npm start`

If your app often or always need to be loaded with `daylightInfo` as if you are on Daylight, you should change the `start` script in package.json to include the `set-daylight-env` command: `npm run set-daylight-env && react-scripts start`.

## building and deploying

1. (Before first deployment) Create a Daylight spec for this app [via the Daylight UI](https://admin.daylight.stitchfix.com/create-app). NB: Your Daylight app name should be the same as the `name` field in this repo's package.json.
1. Don't forget to add proxies for all the tables you're hitting (via the Fogtown API) or other services (khan apps, &c)!
1. Commit and push your changes.
1. Build and push the app to Zoia: `npm run build-and-push`
1. Deploy the app on Daylight staging: `npm run deploy-staging`
1. Check that staging looks good!
1. Deploy the app on Daylight prod: `npm run deploy-prod`
1. 💸 Profit!

## directory structure

`public/` contains the index.html and other assets that will be modified and/or copied and end up in the final `build/`, which is what we push up to the Zoia S3 bucket via the `build-and-push` command and then you can deploy on Daylight as an app of type `zoia-repo`.

You can customize the icon that appears in the browser tab (the favicon) in the index.html by changing the emoji. Look for the 💫 inside a block of tags in `<head>` starting with `<link rel='icon'...>`.

`src/` contains the files you will edit to develop your app. You **cannot** `import` resources outside this directory into your JavaScript.

The `src/setupTests.js` file is configuration for running unit tests via [Jest](https://jestjs.io/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro). More info [here](https://create-react-app.dev/docs/running-tests) in the create-react-app docs.
