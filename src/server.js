const express = require('express');
const { default: AdminBro } = require('admin-bro');
const mongoose = require('mongoose');
const cors = require('cors');
const options = require('./admin.options');
const buildAdminRouter = require('./admin.router');

const app = express();
const port = 5000;
// controllers
const { createProjectLogo, getAllProjectLogos, getProjectLogoById } = require("./controllers/projectLogo.controller");

app.use(cors());

const run = async () => {
  try {
    await mongoose.connect('mongodb+srv://saidaliyevjasur450:vrIK84PI4ya2WHnT@unicornback.atayn.mongodb.net/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });

    console.log('Connected to MongoDB database');

  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }

  const admin = new AdminBro(options);
  const router = buildAdminRouter(admin);

  app.use(admin.options.rootPath, router);
  app.use(express.json());
  app.use(express.json({ limit: '100mb' }));
  app.use(express.urlencoded({ limit: '100mb', extended: true }));

  app.use('/uploads', express.static('uploads'));

  app.get("/", (req, res) => {
    res.send("Hello world. I'm JasurBek");
  });

  // ProjectLogos routes
  app.post("/projectlogos", createProjectLogo);
  app.get("/projectlogos", getAllProjectLogos);
  app.get("/projectlogos/:id", getProjectLogoById); // ID orqali mahsulot olish end-point

  app.listen(port, () => console.log(
    `Example app listening at http://localhost:${port}`,
  ));
};

module.exports = run;
