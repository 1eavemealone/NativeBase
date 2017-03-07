import frameModule = require("ui/frame");

exports.signIn = function() {
    alert("Signing in");
};

exports.register = function() {
    let topmost = frameModule.topmost();
    topmost.navigate("Pages/Register/register");
};



