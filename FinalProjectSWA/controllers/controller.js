const cal = require("../models/model");


function getsex(req, res, ) {
    res.render("index", {
        title: "BMI Calculator",
        message: "Please Put your data for Calculate.",
        names: ["Male", "Female"]
    });
}

function calcu(req, res) {
    var a = req.body.A;
    var b = req.body.B;
    var s = req.body.sex;
    var result;
    switch (s) {
        case "male":
            result = cal.men(req, res);
            break;
        case "female":
            result = cal.women(req, res);
            break;
    }
}


module.exports = {
    getsex,
    calcu
}