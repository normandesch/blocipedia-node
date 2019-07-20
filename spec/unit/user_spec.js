const sequelize = require("../../src/db/models/index").sequelize;
const User = require("../../src/db/models").User;

describe("User", () => {

  beforeEach((done) => {
// #1
    sequelize.sync({force: true})
    .then(() => {
      done();
    })
    .catch((err) => {
      console.log(err);
      done();
    });

  });

  describe("#create()", () => {


    it("should create a User object with a valid name,email and password", (done) => {
      User.create({
        name: "Emily Carey",
        email: "user@example.com",
        password: "1234567890"
      })
      .then((user) => {
        expect(user.email).toBe("user@example.com");
        expect(user.name).toBe("Emily Carey")
        expect(user.id).toBe(1);
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
    });


    it("should not create a user with invalid email or password", (done) => {
      User.create({
        name: "Mortica Adams",
        email: "Invalid Email",
        password: "1234567890"
      })
      .then((user) => {



        done();
      })
      .catch((err) => {

        expect(err.message).toContain("Validation error: must be a valid email");
        done();
      });
    });

    it("should not create a user with an email already taken", (done) => {

// #5
      User.create({
        name: "Balasik",
        email: "user@example.com",
        password: "1234567890"
      })
      .then((user) => {

        User.create({
          name: "Supaman",
          email: "user@example.com",
          password: "what up"
        })
        .then((user) => {

          done();
        })
        .catch((err) => {
          expect(err.message).toContain("Validation error");
          done();
        });

        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
    });

  });

});
