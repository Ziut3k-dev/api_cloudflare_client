const assign = require('object-assign');
const axios = require('axios');

class Getter {
  constructor() {
    // this._agent = options.agent;
  }

  got(uri, options) {
    options = assign({}, options);
    // options.agent = this._agent;
    // console.log('got', uri, options);
    return axios(uri, options);
  }
}

module.exports = Getter;
