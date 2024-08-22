const { default: AdminBro } = require('admin-bro');
const AdminBroMongoose = require('admin-bro-mongoose');

AdminBro.registerAdapter(AdminBroMongoose);

// models
const Product = require("./ProjectsLogo/projectLogo.admin")
/** @type {import('admin-bro').AdminBroOptions} */
const options = {
  resources: [ Product  ],
};
module.exports = options;
