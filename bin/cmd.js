#!/usr/bin/env node

var user = process.env.SAUCE_USERNAME || process.argv[2]
var key = process.env.SAUCE_ACCESS_KEY || process.argv[3]
var build = process.env.TRAVIS_BUILD_NUMBER || process.argv[4]

var url = 'https://' + user + ':' + key + '@saucelabs.com/rest/v1/' + user + '/jobs'

var request = require('hyperquest')
var jsonstream = require('JSONStream')
var through = require('through2')

request.get(url + '?limit=99999999')
  .pipe(jsonstream.parse('*.id'))
  .pipe(through(processJob))

function processJob (id, enc, cb) {
  cb()
  request.get(url + '/' + id)
    .pipe(jsonstream.parse('build'))
    .on('data', data)
  function data (jobBuild) {
    if (build === '*' || Number(jobBuild) === Number(build)) deleteJob(id)
  }
}

function deleteJob (id) {
  console.log('deleting job %s', id)
  var opt = {headers: {'Content-Length': 0}}
  request.delete(url + '/' + id, opt, function (err, res) {
    var statusCode = res ? res.statusCode : 0
    if (!err && statusCode === 200) {
      console.log('deleted job %s', id)
    } else {
      console.error('error deleting job %s status:%s error:%s', id, statusCode, err)
    }
  }).end()
}
