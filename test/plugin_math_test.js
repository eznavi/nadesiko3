const assert = require('assert')
const NakoCompiler = require('../src/nako3')
const CNako3 = require('../src/cnako3')

describe('plugin_math_test', () => {
  const wnako = new NakoCompiler()

  const cnako = new CNako3()
  cnako.silent = true

  const cmp = (code, res) => {
    for (let nako of [cnako, wnako]) {
      let c = code
      if (nako.debug) {
        console.log('code=' + c)
      }
      assert.equal(nako.runReset(c).log, res)
    }
  }

  // --- test ---
  it('算術関数/SIGN', () => {
    cmp('-5のSIGNを表示', '-1')
    cmp('-5の符号を表示', '-1')
    cmp('5の符号を表示', '1')
    cmp('0の符号を表示', '0')
  })
  it('算術関数/FRAC', () => {
    cmp('5.5のFRACを表示', '0.5')
    cmp('5.5の少数部分を表示', '0.5')
    cmp('3.14の整数部分を表示', '3')
  })
})
