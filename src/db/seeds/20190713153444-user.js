'use strict';
const faker = require("faker");

let users = [{
    username: "pawnee12",
    email: "pawnee12@gmail.com",
    password: "leslieknope",
    createdAt: new Date(),
    updatedAt: new Date(),
    role: "standard"
  },
  {
    username: "dinersdriveins",
    email: "anddives@outlook.com",
    password: "flayitup",
    createdAt: new Date(),
    updatedAt: new Date(),
    role: "standard"
  },
  {
    username: "katiebeck",
    email: "katiebeck22@gmail.com",
    password: "beckle56",
    createdAt: new Date(),
    updatedAt: new Date(),
    role: "standard"
  }
];

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert("Users", users, {});

  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete("Users", null, {});

  }
};
