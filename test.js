'use strict';

const moment = require('moment');
let isUnix = false;

const x = 'December 15, 2015';
const y = '1450137600';

const timestamp = 'abc';


// Check if it's a number
// If it is, suppose that it's a Unix timestamp
if (moment.unix(timestamp).isValid()) {
  console.log('its unix!');

  // respond.end(JSON.stringify({
  //   unix: parseInt(timestamp),
  //   natural: moment.unix(timestamp).format('MMMM D, YYYY')
  // }));

  console.log({
    unix: parseInt(timestamp),
    natural: moment.unix(timestamp).format('MMMM D, YYYY')
  })
} else if (moment(new Date(timestamp)).isValid()) {
  console.log('its natural!');

  // respond.end(JSON.stringify({
  //   unix: moment(new Date(timestamp)).format('X'),
  //   natural: moment(new Date(timestamp)).format('MMMM D, YYYY')
  // }));

  console.log({
    unix: moment(new Date(timestamp)).format('X'),
    natural: moment(new Date(timestamp)).format('MMMM D, YYYY')
  });
} else {
  console.log('it gibberish!')

  // respond.end(JSON.stringify({
  //   unix: null,
  //   natural: null
  // }));

  console.log({
    unix: null,
    natural: null
  });
}
