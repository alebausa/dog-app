const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');
const { response } = require('express');
require('dotenv').config();

app.set("views", __dirname + "/views");
app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: true }));

/* Routes */
app.get('/', (req, res, next) => {
  res.render('index');
})

app.get('/search', async (req, res, next) => {
  const { breed } = req.query;
  const error = `No dogs found by ${breed}`;
  try {
    const response = await axios.get(`https://dog.ceo/api/breed/${breed}/images`)
    console.log(response.data.status)
    res.render('results', { query: breed, breeds: response.data.message });
  } catch (err) {
    res.render('index', { error });
  }
})

app.listen(process.env.PORT, () => console.log(`Connected to port ${process.env.PORT}`));