const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: true }));

/* Routes */



app.listen(3000);