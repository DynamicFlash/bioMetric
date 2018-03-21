
var admin = require("firebase-admin");

var serviceAccount = require("./../Keys/serviceAccountKey.json");

var defaultApp = admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://attendance-196708.firebaseio.com"
})

console.log(defaultApp.name);
module.exports = {admin, defaultApp}