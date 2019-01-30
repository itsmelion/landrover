const expect = require('chai').expect;
const getData = require('../src/api').getData;

it('should respond with an array of vehicles', (done) => {
  getData((response) => {
    const data = JSON.parse(response);
    expect(Array.isArray(data.vehicles)).to.equal(true);
    done();
  })
});
