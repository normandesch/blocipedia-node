'use strict';
const faker = require("faker");

let users = [{
    username: "sawstam",
    email: "sawstam@gmail.com",
    password: "sawmeh21",
    createdAt: new Date(),
    updatedAt: new Date(),
    role: "member"
  },
  {
    username: "burkebrooke",
    email: "brookeburk@msn.com",
    password: "brooke123",
    createdAt: new Date(),
    updatedAt: new Date(),
    role: "member"
  },
  {
    username: "kallie",
    email: "kallie1991@gmail.com",
    password: "kallie91",
    createdAt: new Date(),
    updatedAt: new Date(),
    role: "member"
  }
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert("Users", users, {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("Users", null, {});

  }
};
