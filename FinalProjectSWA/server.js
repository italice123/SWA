const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', '*')
    res.setHeader('Access-Control-Allow-Headers', '*')
    next()
})
// configure the app to use bodyParser()
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)
app.use(bodyParser.json())
require('./routes/routes')(app)
app.set("views", "./views");
app.set("view engine", "ejs");

const server = app.listen(8080, "localhost", () => {
    const port = server.address().port;
    const hostname = server.address().address;
    console.log(`Server running at ${hostname}:${port}`);
})