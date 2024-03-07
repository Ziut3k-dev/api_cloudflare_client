# Cloudflare Node.js bindings

[![Stability Stable][badge-stability]][badge-stability-url]
[![Coveralls][badge-coveralls]][badge-coveralls-url]
[![NPM version][badge-npm]][badge-npm-url]
[![Libraries.io Dependencies][badge-libraries]][badge-libraries-url]
[![NPM downloads][badge-npm-downloads]][badge-npm-downloads]

[//]: # ([![Travis CI][badge-travis]][badge-travis-url])


[badge-stability]: https://img.shields.io/badge/stability-stable-green.svg?style=flat-square

[badge-stability-url]: https://github.com/dominictarr/stability/blob/4d649a5b3af8444720929a50254dfbb071ce27e7/levels.json#L8-L9

[badge-npm]: https://img.shields.io/npm/v/api_cloudflare_client.svg?style=flat-square

[badge-npm-downloads]: https://img.shields.io/npm/dm/api_cloudflare_client.svg?style=flat-square

[badge-npm-url]: https://www.npmjs.com/package/api_cloudflare_client

[badge-travis]: https://img.shields.io/travis/ziut3k-dev/api_cloudflare_client/master.svg?style=flat-square

[badge-travis-url]: https://travis-ci.org/ziut3k-dev/api_cloudflare_client

[badge-coveralls]: https://img.shields.io/coveralls/github/ziut3k-dev/api_cloudflare_client/master.svg?style=flat-square

[badge-coveralls-url]: https://coveralls.io/github/Ziut3k-dev/api_cloudflare_client

[badge-libraries]: https://img.shields.io/librariesio/github/Ziut3k-dev/api_cloudflare_client.svg?style=flat-square

[badge-libraries-url]: https://libraries.io/github/Ziut3k-dev/api_cloudflare_client

[Cloudflare v4 API][cf-api] bindings for Node.js, providing a sourdough
"BREAD" (Browse, Read, Edit, Add, and Delete) interface.

[cf-api]: https://api.cloudflare.com/

With these bindings, you'll get the following features:

* A Promise-based API. With modern versions of Node.js, this can be
  leveraged for async/await and generator support.
* Automatic handling of Gzip/Deflate compression.

Node.js v12 and greater are supported.

## Configuration

### API Keys

Set your account email address and API key. The API key can be found on
the [My Profile -> API Tokens][api-tokens] page in the Cloudflare dashboard.

[api-tokens]: https://dash.cloudflare.com/profile/api-tokens

```javascript
var cf = require('api_cloudflare_client')({
  email: 'you@example.com',
  key: 'your Cloudflare API key'
});
```

### API Tokens (BETA)

Create your token on the [My Profile -> API Tokens][api-tokens] page in the Cloudflare dashboard.

[api-tokens]: https://dash.cloudflare.com/profile/api-tokens

```javascript
var cf = require('api_cloudflare_client')({
  token: 'your Cloudflare API token'
});
```

## API Overview

Every resource is accessed via your `cf` instance:

```javascript
// cf.{ RESOURCE_NAME }.{ METHOD_NAME }
```

Every resource method returns a promise, which can be chained or used
with async/await.

```javascript
cf.zones.read('023e105f4ecef8ad9ca31a8372d0c353').then(function(resp) {
  return resp.result.status;
});


// where supported
async function getZoneStatus(id) {
  var resp = await cf.zones.read('023e105f4ecef8ad9ca31a8372d0c353');
  return resp.result.status;
}
```

### Documentation

* [Generated JSDoc](https://cloudflare.github.io/node-cloudflare)
