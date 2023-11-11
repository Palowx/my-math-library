const math = require('./math')
const assert = require('assert')

assert.strictEqual(math.sum(2,2),4,'should sum two nums')
assert.strictEqual(math.sum([1,2,3,4,6]),16,'should sum array')