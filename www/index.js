// This is a JavaScript file
ons.ready(function() {
  Kii.initializeWithSite("cd704e66",
    "cff7d016bc4da4da26807b71f720c84b",
    "https://qa21.internal.kii.com/api", {});
  Kii.setLogging(true);
});

var userIdentifier;
var requestReset = function() {
  console.log("requestReset");
  var navigator = document.getElementById('navigator');
  userIdentifier = document.getElementById('user-identifier').value;
  
  KiiUser.resetPasswordWithNotificationMethod(userIdentifier, "SMS_PIN").then(
    function(){
      ons.notification.alert('request reset succeeded!');
      navigator.pushPage("page2.html");
    }).catch(function(error){
      ons.notification.alert('Failed: ' + error);
    }); 
}

var completeReset = function() {
  console.log("completeReset");
  var pinCode = document.getElementById("pin-code").value;
  var newPassword = document.getElementById("new-password").value;
  // FIXME: Not possible to use PHONE/ EMAIL for now.
  userIdentifier = "0f2968a00022-5879-6e11-d6e3-0288cb07";
  KiiUser.completeResetPassword(userIdentifier, pinCode, newPassword).
  then(function() {
      ons.notification.alert('complete reset succeeded!');
  }).catch(function(error) {
    ons.notification.alert('Failed: ' + error);
  });
}
