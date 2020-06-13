'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const apiRouter = require('../lib/routes/v1-router');
const route_auth = require('./auth/router');
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/api/v1',apiRouter);
app.use(route_auth);


const startServer = (PORT) => {
  app.listen(PORT, () => {
    console.log(`RAGHAD server is up and running on port ${PORT}`);
  });
};
module.exports = {
  server: app,
  start: startServer,
};
