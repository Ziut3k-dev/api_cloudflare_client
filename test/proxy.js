/*
 * Copyright (C) 2014-present Cloudflare, Inc.

 * This software may be modified and distributed under the terms
 * of the MIT license.  See the LICENSE file for details.
 */

'use strict';

const assert = require('power-assert');
const mochaModule = require('mocha');

const proxy = require('../lib/proxy');

const describeMocha = mochaModule.describe;
const itMocha = mochaModule.it;

describeMocha('proxy agents', () => {
  itMocha('should not return an agent when parameters are not set', done => {
    const tests = [
      ['', '', 'example.com'],
      [null, null, 'http://example.com/'],
    ];

    tests.forEach(test => {
      const agent = proxy.proxyAgent(test[0], test[1], test[2]);

      assert.ok(!agent, 'agent was unexpected');
    });

    done();
  });

  itMocha('should not return an agent when noProxy matches base', done => {
    const tests = [
      ['http://10.0.0.1:1234', 'example.com', 'http://example.com'],
      ['http://10.0.0.1:1234', '.example.com', 'http://example.com'],
      ['http://10.0.0.1:1234', 'foobar.com,.example.com', 'http://example.com'],
    ];

    tests.forEach(test => {
      const agent = proxy.proxyAgent(test[0], test[1], test[2]);

      assert.ok(!agent, 'agent was unexpected');
    });

    done();
  });

  itMocha('should return an agent when noProxy is not set', done => {
    const tests = [
      ['http://10.0.0.1:1234', null, 'http://example.com'],
      ['http://10.0.0.1:1234', '', 'http://example.com'],
    ];

    tests.forEach(test => {
      const agent = proxy.proxyAgent(test[0], test[1], test[2]);

      assert.ok(agent, 'expected an agent');
    });

    done();
  });

  itMocha("should return an agent when noProxy doesn't match", done => {
    const agent = proxy.proxyAgent(
      'http://10.0.0.1:1234',
      '.example.com',
      'https://example.org'
    );

    assert.ok(agent, 'expected an agent');

    done();
  });
});
