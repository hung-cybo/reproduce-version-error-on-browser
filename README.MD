# Reproduce KintoneRestAPIClient.version causes an Error on browser environment

## Step to reproduce

1. `cd` to this repo
2. Run `npm install` and `npm run build`
3. Start server by running `node server.js`
4. Open `http://localhost:3000` on browser
5. Check the console log of browser
   - At this step, you will see an error `Uncaught ReferenceError: PACKAGE_VERSION is not defined`
6. Checkout the fixed branch of js-sdk (https://github.com/kintone/js-sdk/pull/2143)
7. `cd` to `rest-api-client` package and run `yarn build`
8. Run `yarn link` to create link package
9. Back to this repo
10. Run `yarn link @kintone/rest-api-client`
11. Run `npm run build`
12. Refresh browser and check the console log again.
    - At this step, you will see a log `4.0.0` (the version of rest-api-client)

