# ODDO
  ODDO” is the first worldwide used system for such purposes as creating group events,  finding people in your area of interests, and improving the social life of communities. This system provides an easy way to socialize by creating new events or joining existing ones. With the incorporation of an online registration form, a mobile app, a database management system, a secure internal network, and a version for administrators, the new system will be a complete full-fledged tool to meet the needs of users and make their social life easier.

## Running the web app
- Clone the repo
- Add a file called `keys_dev.js` on your config folder
- Add the follow code to keys_dev.js:
```
module.exports = {
    mongoURI: {Add a connection string from MongoDB Alta},
    secretOrKey: {Enter a random string}
};
```
- Run `npm i && npm start` to start your server
- CD to client folder and run `npm i && npm start` to start the web app