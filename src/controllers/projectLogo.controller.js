// controllers/projectLogo.controller.js
const { ProjectLogo } = require('../ProjectsLogo/projectLogo.entity');

// Create ProjectLogos
const createProjectLogo = async (req, res) => {
    try {
        const { name, price, description, image } = req.body;
        const newProjectLogo = new ProjectLogo({ name, price, description, image });
        await newProjectLogo.save();
        res.status(201).json(newProjectLogo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all ProjectLogos
const getAllProjectLogos = async (req, res) => {
    try {
        const projectsLogo = await ProjectLogo.find();
        res.status(200).json(projectsLogo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get ProjectLogo by ID
const getProjectLogoById = async (req, res) => {
    try {
        const projectLogo = await ProjectLogo.findById(req.params.id);
        if (!projectLogo) {
            return res.status(404).json({ message: 'Mahsulot topilmadi' });
        }
        res.status(200).json(projectLogo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createProjectLogo, getAllProjectLogos, getProjectLogoById };
