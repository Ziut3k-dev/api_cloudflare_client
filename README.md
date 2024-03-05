# Cloudflare Node.js bindings
Forked from [cloudflare/node-cloudflare](https://github.com/cloudflare/node-cloudflare)

[![Stability Stable][badge-stability]][badge-stability-url]
[![NPM version][badge-npm]][badge-npm-url]
[![Travis CI][badge-travis]][badge-travis-url]
[![Coveralls][badge-coveralls]][badge-coveralls-url]
[![NPM downloads][badge-npm-downloads]][badge-npm-downloads]
[![Libraries.io Dependencies][badge-libraries]][badge-libraries-url]

[Cloudflare v4 API][cf-api] bindings for Node.js, providing a sourdough
"BREAD" (Browse, Read, Edit, Add, and Delete) interface.

[cf-api]: https://api.cloudflare.com/

With these bindings, you'll get the following features:

* A Promise-based API. With modern versions of Node.js, this can be
  leveraged for async/await and generator support.
* Automatic handling of Gzip/Deflate compression.

Node.js v4 and greater are supported.

## Configuration

### API Keys

Set your account email address and API key.  The API key can be found on
the [My Profile -> API Tokens][api-tokens] page in the Cloudflare dashboard.

[api-tokens]: https://dash.cloudflare.com/profile/api-tokens

```javascript
var cf = require('cloudflare')({
  email: 'you@example.com',
  key: 'your Cloudflare API key'
});
```

### API Tokens (BETA)

Create your token on the [My Profile -> API Tokens][api-tokens] page in the Cloudflare dashboard.

[api-tokens]: https://dash.cloudflare.com/profile/api-tokens

```javascript
var cf = require('cloudflare')({
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
cf.zones.read('023e105f4ecef8ad9ca31a8372d0c353').then(function (resp) {
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
