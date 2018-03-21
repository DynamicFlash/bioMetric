const {admin} = require('./../connect/connect-admin');

var user ={
  email : 'aldrin.a.fernandes@gmail.com',
  password : '12345678',
  name : 'Aldrin'
};


var newUser = (user)=>
{

  admin.auth().createUser({
  email: user.email,
  emailVerified: true,
  password: user.password,
  displayName: user.name,
  disabled: false
})
  .then(function(userRecord) {
    // See the UserRecord reference doc for the contents of userRecord.
    console.log("Successfully created new user:", userRecord.uid);
  })
  .catch(function(error) {
    console.log(error.errorInfo.message);
  });

}


module.exports = newUser;