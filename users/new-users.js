const {admin} = require('./../connect/connect-admin');
const dbadd =require('./../db/add-db');

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
    console.log("Successfully created new user:", userRecord);
    dbadd(userRecord.toJSON());
    
  })
  .catch(function(error) {
    console.log(error);
  });

}
newUser(user);

module.exports = newUser;