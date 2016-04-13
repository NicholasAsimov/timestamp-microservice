'use strict';

const express = require('express');
const moment = require('moment');

const app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (request, response) => {
  response.render('index');
});

app.get('/:timestamp', (request, response) => {
  const timestamp = request.params.timestamp;

  let result = {};

  if (moment.unix(timestamp).isValid()) {
    result = {
      unix: parseInt(timestamp, 10),
      natural: moment.unix(timestamp).format('MMMM D, YYYY'),
    };
  } else if (moment(new Date(timestamp)).isValid()) {
    result = {
      unix: moment(new Date(timestamp)).format('X'),
      natural: moment(new Date(timestamp)).format('MMMM D, YYYY'),
    };
  } else {
    result = {
      unix: null,
      natural: null,
    };
  }

  response.json(result);
});

app.listen(process.env.PORT || 3000, function() {
  /* eslint-disable no-console */
  console.log(`Server listening on port ${this.address().port}...`);
  /* eslint-enable no-console */
});
