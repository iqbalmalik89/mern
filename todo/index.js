require("./config/env");
const express = require('express');

const middleware = require("./middleware");
require("./config/mongo");
const route = require("./route");
const app = express()

app.use(middleware.morgan);
app.use(middleware.bodyParser);
app.use(route);


app.listen(process.env.PORT, (err) => {
    if (err) console.log(err);
    else console.log(`Server is Running on PORT ${process.env.PORT}`);
});