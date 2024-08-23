const AdminBro = require('admin-bro');
const AdminBroMongoose = require('admin-bro-mongoose');
const { ProjectLogo } = require('./ProjectsLogo/projectLogo.entity');
const uploadFeature = require('@admin-bro/upload').default;

AdminBro.registerAdapter(AdminBroMongoose);

const options = {
  resources: [
    {
      resource: ProjectLogo,
    }
  ],
  rootPath: '/admin',
};

module.exports = options;
