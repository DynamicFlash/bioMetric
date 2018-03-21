const {admin} = require('./../connect/connect-admin');


admin.auth().deleteUser({name : "Juventus"})
  .then(function() {
    console.log("Successfully deleted user");
  })
  .catch(function(error) {
    console.log("Error deleting user:", error);
  });