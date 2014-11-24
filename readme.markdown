# remove-saucelabs-jobs-by-build

remove-saucelabs-jobs-by-build

Comes in handy when needing to rerun a ci build for example in [travis](https://travis-ci.org).

If the travis build fails and is rerun the [saucelabs badge](https://docs.saucelabs.com/reference/status-images/) can generate
the incorrect svg badge.

This utility removes the jobs for a given build.

# usage

```
usage: remove-saucelabs-jobs-by-build $SAUCE_USERNAME $SAUCE_ACCESS_KEY $TRAVIS_BUILD
```

# install

With [npm](https://npmjs.org) do:

```
npm install remove-saucelabs-jobs-by-build
```

# license

MIT
