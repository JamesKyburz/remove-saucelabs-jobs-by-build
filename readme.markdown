# remove-saucelabs-jobs-by-build

[![Greenkeeper badge](https://badges.greenkeeper.io/JamesKyburz/remove-saucelabs-jobs-by-build.svg)](https://greenkeeper.io/)

remove-saucelabs-jobs-by-build

Comes in handy when needing to rerun a ci build for example in [travis](https://travis-ci.org).

If the travis build fails and is rerun the [saucelabs badge](https://docs.saucelabs.com/reference/status-images/) can generate
the incorrect svg badge.

This utility removes the jobs for a given build.

Used best in combination with [travis retries option](http://docs.travis-ci.com/user/build-timeouts/)

# command usage

```bash
remove-saucelabs-jobs-by-build $SAUCE_USERNAME $SAUCE_ACCESS_KEY $TRAVIS_BUILD
```

# with travis

### `package.json`

Add remove-saucelabs-jobs-by-build to scripts for example
```json
  "scripts": {
    "test-browsers": "remove-saucelabs-jobs-by-build && zuul test/*.js"
  }
```

### `.travis.yml`

Setup number of retries for example 4.

And run tests with retry

```yaml
bundler_args: --retry 4
script:
  travis_retry npm run test-browsers
```

If all the retries fail, then restarting the current build will still delete the saucelabs jobs for the build.

# install

With [npm](https://npmjs.org) do:

```
npm install remove-saucelabs-jobs-by-build
```

# license

MIT
