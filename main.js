const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');
require('dotenv').config();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: true }));

/* Routes */
app.get('/', (req, res, next) => {
  res.render('index');
})

app.listen(process.env.PORT, () => console.log(`Connected to port ${process.env.PORT}`));