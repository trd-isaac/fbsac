var win = Ti.UI.createWindow({backgroundColor: 'white'});
var fb = require('facebook');
fb.appid = 563585713751457;
fb.permissions = ['publish_stream'];
fb.forceDialogAuth = true;
fb.addEventListener('login', function(e) {
    if (e.success) {
        alert('Logged in');
    }
});
fb.addEventListener('logout', function(e) {
    alert('Logged out');
});
    
// Add the button.  Note that it doesn't need a click event listener.
win.add(fb.createLoginButton({
    top : 50,
    style : fb.BUTTON_STYLE_WIDE
}));
win.open();