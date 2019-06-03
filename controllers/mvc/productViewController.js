exports.new = function (req, res) {
    var path = require("path");
    res.render(path.join(__dirname + "../../../views/login/Index.html"));
};