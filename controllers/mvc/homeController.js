exports.home = function (req, res) {
    var path = require("path");
    res.render(path.join(__dirname + "/../../views/home/index.html"));
};