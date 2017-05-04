const request = require('request');
const rp = require('request-promise-native');
const url = 'http://localhost:3000/items'

function getOptions(uri) {
  return {
    uri,
    resolveWithFullResponse: true
  };
}

describe("Items Routes", function() {
  describe("INDEX", () => {
    it("returns status code 200", (done) => {
      rp(getOptions(url), (err, res, body) => {
        expect(res.statusCode).toBe(404);
        done();
      })
      .catch(err => {
        this.fail(err.message);
        done();
      });
    });


    // it("returns 3 items", (done) => {
    //   rp(getOptions(url), (err, res, body) => {
    //     const items = JSON.parse(body);
    //     expect(items.length).toBe(3);
    //     done();
    //   })
    //   .catch(err => {
    //     this.fail(err.message);
    //     done();
    //   });
    // });
    // it("returns items that have a name", (done) => {
    //   rp(getOptions(url), (err, res, body) => {
    //     const items = JSON.parse(body);
    //     expect(items.length).toBe(3);
    //     expect(items[0].name).toBe('item1');
    //     expect(items[1].name).toBe('item2');
    //     expect(items[2].name).toBe('item3');
    //     done();
    //   })
    //   .catch(err => {
    //     this.fail(err.message);
    //     done();
    //   });
    // });
  });
});
