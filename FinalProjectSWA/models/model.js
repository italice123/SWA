

function calbmi(req) {
    var a = Number(req.body.A);
    var b = Number(req.body.B);
    var bmi = Number(b / ((a / 100) * (a / 100)));
    return bmi;
}


function men(req, res) {
    var a = Number(req.body.A);
    var b = Number(req.body.B);
    var bmi = calbmi(req);
    if (bmi < 18.5) {
        result = { Height: a, Weight: b, BMI: bmi, stand: "< 18.5", detail: "Lower than the threshold" };
    } else {
        if ((18.5 <= bmi) && (bmi <= 24.9)) {
            result = { Height: a, Weight: b, BMI: bmi, stand: "18.5-24.9", detail: "Standard" };
        } else {
            if ((25 <= bmi) && (bmi <= 29.9)) {
                result = { Height: a, Weight: b, BMI: bmi, stand: "25-29.9", detail: "Fat state 1" };
            } else {
                if ((30 <= bmi) && (bmi <= 34.9)) {
                    result = { Height: a, Weight: b, BMI: bmi, stand: "30-34.9", detail: "Fat state 2" };
                } else {
                    if ((35 <= bmi) && (bmi <= 39.9)) {
                        result = { Height: a, Weight: b, BMI: bmi, stand: "35-39.9", detail: "Fat state 3" };
                    } else {
                        result = { Height: a, Weight: b, BMI: bmi, stand: "> 40", detail: "Fat state 4" };

                    }
                }
            }

        }

    }

    return res.render("result", { title: "Your BMI Result", message: result });
}

function women(req, res) {
    var a = Number(req.body.A);
    var b = Number(req.body.B);
    var bmi = calbmi(req);
    if (bmi < 18.5) {
        result = { Height: a, Weight: b, BMI: bmi, stand: "< 18.5", detail: "Lower than the threshold" };
    } else {
        if ((18.5 <= bmi) && (bmi <= 22.9)) {
            result = { Height: a, Weight: b, BMI: bmi, stand: "18.5-22.9", detail: "Standard" };
        } else {
            if ((23 <= bmi) && (bmi <= 24.9)) {
                result = { Height: a, Weight: b, BMI: bmi, stand: "23-24.9", detail: "Fat state 1" };
            } else {
                if ((25 <= bmi) && (bmi <= 29.9)) {
                    result = { Height: a, Weight: b, BMI: bmi, stand: "25-29.9", detail: "Fat state 2" };
                } else {
                    result = { Height: a, Weight: b, BMI: bmi, stand: " > 30 ", detail: "Fat state 3" };

                }

            }

        }

    }
    return res.render("result", { title: "Your BMI Result", message: result });
}


module.exports = {
    men,
    women
}