const helloWorld = require('./helloWorld');
/* require() imports the following:
 const helloWorld = function() {
  return ''
};

module.exports = helloWorld;
*/



// The next block (`describe()`) is the body of the test. 
// Basically, all it's doing is running your code and testing
// to see if the output is correct.
describe('Hello World', function() {
  test('says "Hello, World!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
