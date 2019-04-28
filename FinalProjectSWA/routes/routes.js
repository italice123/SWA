module.exports = app => {
    const detail = require("../controllers/controller");

    app.get("/", (req, res) => {
        detail.getsex(req, res);
    });

    app.post("/cal", (req, res) => {
        detail.calcu(req, res);
    });

};
