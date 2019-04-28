const cal = require("../models/model");


function getsex(req, res, ) {
    res.render("index", {
        title: "BMI Calculator",
        message: "Please Put your data for Calculate.",
        names: ["Male", "Female"]
    });
}

function calcu(req, res) {
    var result;
    switch (req.body.sex) {
        case "Male":
            result = cal.men(req, res);
            break;
        case "Female":
            result = cal.women(req, res);
            break;
    }
}


module.exports = {
    getsex, 
    calcu
}