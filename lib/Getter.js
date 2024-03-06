const assign = require('object-assign');
const axios = require('axios');

class Getter {
  constructor() {}

  got(uri, options) {
    options = assign({}, options);
    options.url = uri;
    return axios
      .request(options)
      .then(response => response.data)
      .catch(error => error);
  }
}

module.exports = Getter;
