const request = require("request");
const base = "http://localhost:3000/";
const server = require("../../src/server");

describe("routes : static", () => {
  describe("GET /", () => {
    it("should return status code 200", done => {
      request.get(base, (err, res, body) => {
        expect(res.statusCode).toBe(200);
        done();
      });
    });
  });
});
