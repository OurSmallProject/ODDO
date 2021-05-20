module.exports = {
    mongoURI: "mmongodb+srv://admin:admin123@oddo.7nrrx.mongodb.net/ODDOdb?retryWrites=true&w=majority",
    secretOrKey: "supersecret",
    geocoderProvider: process.env.GEOCODER_PROVIDER,
    geocoderAPIKey: process.env.GEOCODER_API_Key
};
