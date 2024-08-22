const mongoose = require('mongoose');

const ProjectLogoSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
});

const ProjectLogo = mongoose.model('ProjectLogo', ProjectLogoSchema);

module.exports = { ProjectLogoSchema, ProjectLogo };