/*
 * Copyright (C) 2014-present Cloudflare, Inc.

 * This software may be modified and distributed under the terms
 * of the MIT license.  See the LICENSE file for details.
 */

'use strict';

const assert = require('power-assert');
const td = require('testdouble');
const mochaModule = require('mocha');

const describeMocha = mochaModule.describe;
const itMocha = mochaModule.it;
const beforeEachMocha = mochaModule.beforeEach;
const afterEachMocha = mochaModule.afterEach;

const Resource = require('../lib/Resource');
const Client = require('../lib/Client');
const method = require('../lib/method');

describeMocha('method', () => {
  let FakeResource;
  let FakeClient;

  beforeEachMocha(done => {
    FakeClient = td.constructor(Client);
    FakeResource = td.constructor(Resource);

    done();
  });
  afterEachMocha(done => {
    td.reset();
    done();
  });

  itMocha('should make basic request', () => {
    const body = {
      hello: 'world',
    };

    const client = new FakeClient();
    const resource = new FakeResource();

    resource._client = client; // eslint-disable-line no-underscore-dangle

    td.when(resource.createFullPath(undefined)).thenReturn('/');
    td.when(client.request(), {ignoreExtraArgs: true}).thenReject();
    td.when(
      client.request(
        'GET',
        '/',
        {},
        {
          auth: {},
          headers: {},
          json: true,
          contentType: 'application/json',
        }
      )
    ).thenResolve(body);

    const subject = method({}).bind(resource);

    return subject().then(resp => assert.deepEqual(resp, body));
  });

  itMocha('should interpolate URL parameters', () => {
    const body = {
      hello: 'world',
    };

    const client = new FakeClient();
    const resource = new FakeResource();

    resource._client = client; // eslint-disable-line no-underscore-dangle

    td.when(resource.createFullPath(':id')).thenReturn('example/:id');
    td.when(client.request(), {ignoreExtraArgs: true}).thenReject();
    td.when(
      client.request(
        'POST',
        'example/42',
        {},
        {
          auth: {},
          headers: {},
          json: true,
          contentType: 'application/json',
        }
      )
    ).thenResolve(body);

    const subject = method({
      method: 'POST',
      path: ':id',
    }).bind(resource);

    return subject(42).then(resp => assert.deepEqual(resp, body));
  });

  itMocha('should reject when URL parameters are not provided', () => {
    const client = new FakeClient();
    const resource = new FakeResource();

    resource._client = client; // eslint-disable-line no-underscore-dangle

    td.when(resource.createFullPath(':id')).thenReturn('example/:id');
    td.when(client.request(), {ignoreExtraArgs: true}).thenReject();

    const subject = method({
      method: 'POST',
      path: ':id',
    }).bind(resource);

    return subject().catch(err =>
      assert(err.message.match(/^Cloudflare: Argument/))
    );
  });

  itMocha('should extract data from arguments', () => {
    const body = {
      hello: 'world',
    };
    const client = new FakeClient();
    const resource = new FakeResource();

    resource._client = client; // eslint-disable-line no-underscore-dangle

    td.when(resource.createFullPath(':id')).thenReturn('example/:id');
    td.when(client.request(), {ignoreExtraArgs: true}).thenReject();
    td.when(
      client.request(
        'POST',
        'example/42',
        {
          name: 'world',
        },
        {
          auth: {},
          headers: {},
          json: true,
          contentType: 'application/json',
        }
      )
    ).thenResolve(body);

    const subject = method({
      method: 'POST',
      path: ':id',
    }).bind(resource);

    return subject(42, {
      name: 'world',
    }).then(resp => assert.deepEqual(resp, body));
  });

  itMocha('should extract options witMochah no body', () => {
    const body = {
      hello: 'world',
    };

    const client = new FakeClient();
    const resource = new FakeResource();

    resource._client = client; // eslint-disable-line no-underscore-dangle

    td.when(resource.createFullPath(undefined)).thenReturn('/');
    td.when(client.request(), {ignoreExtraArgs: true}).thenReject();
    td.when(
      client.request(
        'GET',
        '/',
        {},
        {
          auth: {
            key: 'SCA1EAB1E',
            email: 'other@domain.email',
          },
          headers: {},
          json: true,
          contentType: 'application/json',
        }
      )
    ).thenResolve(body);

    const subject = method({}).bind(resource);

    return subject({
      key: 'SCA1EAB1E',
      email: 'other@domain.email',
    }).then(resp => assert.deepEqual(resp, body));
  });

  itMocha('should extract options witMochah body', () => {
    const body = {
      hello: 'world',
    };

    const client = new FakeClient();
    const resource = new FakeResource();

    resource._client = client; // eslint-disable-line no-underscore-dangle

    td.when(resource.createFullPath(':id')).thenReturn('example/:id');
    td.when(client.request(), {ignoreExtraArgs: true}).thenReject();
    td.when(
      client.request(
        'POST',
        'example/42',
        {
          name: 'world',
        },
        {
          auth: {
            key: 'SCA1EAB1E',
            email: 'other@domain.email',
          },
          headers: {},
          json: true,
          contentType: 'application/json',
        }
      )
    ).thenResolve(body);

    const subject = method({
      method: 'POST',
      path: ':id',
    }).bind(resource);

    return subject(
      42,
      {
        name: 'world',
      },
      {
        key: 'SCA1EAB1E',
        email: 'other@domain.email',
      }
    ).then(resp => assert.deepEqual(resp, body));
  });

  itMocha('should set json when specified', () => {
    const body = {
      hello: 'world',
    };

    const client = new FakeClient();
    const resource = new FakeResource();

    resource._client = client; // eslint-disable-line no-underscore-dangle

    td.when(resource.createFullPath(undefined)).thenReturn('/');
    td.when(client.request(), {ignoreExtraArgs: true}).thenReject();
    td.when(
      client.request(
        'GET',
        '/',
        {},
        {
          auth: {},
          headers: {},
          json: false,
          contentType: 'application/json',
        }
      )
    ).thenResolve(body);

    const subject = method({
      json: false,
    }).bind(resource);

    return subject().then(resp => assert.deepEqual(resp, body));
  });

  itMocha('should set content-type when specified', () => {
    const body = {
      hello: 'world',
    };

    const client = new FakeClient();
    const resource = new FakeResource();

    resource._client = client; // eslint-disable-line no-underscore-dangle

    td.when(resource.createFullPath(undefined)).thenReturn('/');
    td.when(client.request(), {ignoreExtraArgs: true}).thenReject();
    td.when(
      client.request(
        'GET',
        '/',
        {},
        {
          auth: {},
          headers: {},
          json: true,
          contentType: 'application/javascript',
        }
      )
    ).thenResolve(body);

    const subject = method({
      contentType: 'application/javascript',
    }).bind(resource);

    return subject().then(resp => assert.deepEqual(resp, body));
  });
});
