const sequelize = require("../../src/db/models/index").sequelize;
const User = require("../../src/db/models").User;
const Wiki = require("../../src/db/models").Wiki;

describe("Wiki", () => {
  beforeEach(done => {
    this.user;
    this.wiki;
    sequelize.sync({ force: true }).then(res => {
      User.create({
        username: "Samantha Pacheco",
        email: "pacheco@gmail.com",
        password: "123456789"
      }).then(user => {
        this.user = user;

        Wiki.create({
          title: "Harps",
          body: "If you love harps, come here!",
          private: false,
          userId: this.user.id
        }).then(wiki => {
          this.wiki = wiki;
          done();
        });
      });
    });
  });

  describe("#create()", () => {
    it("should create a wiki object with a title,body,privacy status and assigned user", done => {
      Wiki.create({
        title: "Cat Shorts",
        body: "We love clothes made of cat hair!",
        private: false,
        userId: this.user.id
      })
        .then(wiki => {
          expect(wiki.title).toBe("Cat Shorts");
          expect(wiki.body).toBe("We love clothes made of cat hair!");
          expect(wiki.private).toBeFalsy();
          expect(wiki.userId).toBe(this.user.id);
          done();
        })
        .catch(err => {
          console.log(err);
          done();
        });
    });

    it("should not create a wiki object with a missing title, body or assigned user", done => {
      Wiki.create({
        title: "Cat Shorts"
      })
        .then(wiki => {
          done();
        })
        .catch(err => {
          expect(err.message).toContain("Wiki.body cannot be null");
          expect(err.message).toContain("Wiki.private cannot be null");
          expect(err.message).toContain("Wiki.userId cannot be null");
          done();
        });
    });

    describe("#setUser()", () => {
      it("should associate a user and a wiki together", done => {
        User.create({
          username: "Normandesk",
          email: "ndesk@gmail.com",
          password: "1234567890"
        }).then(newUser => {
          expect(this.wiki.userId).toBe(this.user.id);

          this.wiki.setUser(newUser).then(wiki => {
            expect(wiki.userId).toBe(newUser.id);
            done();
          });
        });
      });
    });

    describe("getUser", () => {
      it("should return the associated user", done => {
        this.wiki.getUser().then(associatedUser => {
          expect(associatedUser.username).toBe("Samantha Pacheco");
          done();
        });
      });
    });
  });
});
