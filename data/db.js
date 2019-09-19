const knex = require("knex");

const environment = secrets.environment || "development";
const config = require("../knexfile.js")[environment];

module.exports = knex(config);
