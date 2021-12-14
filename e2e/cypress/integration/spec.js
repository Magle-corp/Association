import Test from '../../../Association-next/src/util/Test.js'

describe('My First Test', () => {
  it('Does not do much!', () => {
    return Test(1, 2).then((result) => {
     expect(result).to.equal(3)
  })
})})
