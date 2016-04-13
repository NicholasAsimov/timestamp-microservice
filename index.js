'use strict';

const express = require('express');
const moment = require('moment');

const app = express();
const port = process.argv[2] || 3000;

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

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Server listening on port ${port}...`);
  /* eslint-enable no-console */
});
