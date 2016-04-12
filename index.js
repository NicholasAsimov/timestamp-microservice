'use strict';

const express = require('express');
const moment = require('moment');

const app = express();
const port = process.argv[2] || 3000;

app.get('/:timestamp', (request, response) => {
  const timestamp = request.params.timestamp;

  if (moment.unix(timestamp).isValid()) {
    response.end(JSON.stringify({
      unix: parseInt(timestamp),
      natural: moment.unix(timestamp).format('MMMM D, YYYY')
    }));

  } else if (moment(new Date(timestamp)).isValid()) {
    response.end(JSON.stringify({
      unix: moment(new Date(timestamp)).format('X'),
      natural: moment(new Date(timestamp)).format('MMMM D, YYYY')
    }));

  } else {
    response.end(JSON.stringify({
      unix: null,
      natural: null
    }));
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
})
