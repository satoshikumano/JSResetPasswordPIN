// Replace appID, appKey and appSite values with your application's
// created on developer.kii.com.
var appID = "__app_id";
var appKey = "__app_key";
var appSite = KiiSite.JP;

ons.ready(function() {
  Kii.initializeWithSite(appID,
    appKey,
    appSite, {});
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
  KiiUser.completeResetPassword(userIdentifier, pinCode, newPassword).
  then(function() {
      ons.notification.alert('complete reset succeeded!');
  }).catch(function(error) {
    ons.notification.alert('Failed: ' + error);
  });
}
