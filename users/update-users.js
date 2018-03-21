
const {admin} = require('./../connect/connect-admin');

var uid = 'd4aNQehyMma8PZ85MKr0eqg0Fb42'
var user ={
  email : '14ec09@aitdgoa.edu.in',
  password : '12345678',
  name : 'Juventus'
};


var updateEmailAndPass = (user,uid)=>{

admin.auth().updateUser(uid, {
  email: user.email,
  password: user.password
})
  .then(function(userRecord) {
    console.log("Successfully updated user", userRecord.toJSON());
  })
  .catch(function(error) {
    console.log(error.errorInfo.message);
  });

}  

var updateVisibility = (uid)=>{
  admin.auth().getUser(uid)
  .then(function(userRecord) {
    var check = userRecord.toJSON();

    if(userRecord.disabled === true){

      admin.auth().updateUser(uid, {
      disabled: false
        
        }).then(function(userRecord) {
          console.log(`Name : ${userRecord.toJSON().displayName} \nDisabled : ${userRecord.toJSON().disabled} \n `);
          }).catch(function(error) {
            console.log(error.errorInfo.message);
          });
      }else {
       admin.auth().updateUser(uid, {
        disabled: true
        
        }).then(function(userRecord) {
          console.log(`Name : ${userRecord.toJSON().displayName} \nDisabled : ${userRecord.toJSON().disabled} \n `);
          }).catch(function(error) {
            console.log(error.errorInfo.message);
          });

      }

  }).catch(function(error) {
    console.log(error.errorInfo.message);
  });

}  

var updateAll = (user,uid)=>{

admin.auth().updateUser(uid, {
  email: user.email,
  password: user.password,
  displayName: user.name,
  disabled: false
})
  .then(function(userRecord) {
    console.log("Successfully updated user", userRecord.toJSON());
  })
  .catch(function(error) {
    console.log(error.errorInfo.message);
  });

}  

var updateName = (user,uid)=>{

admin.auth().updateUser(uid, {
  displayName: user.name,
})
  .then(function(userRecord) {
    console.log("Successfully updated display Name to", userRecord.toJSON().displayName);
  })
  .catch(function(error) {
    console.log(error.errorInfo.message);
  });

} 

module.exports = {
  updateAll,
  updateName,
  updateVisibility,
  updateEmailAndPass
}