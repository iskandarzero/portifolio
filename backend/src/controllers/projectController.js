const projectService = require('../services/projectService');

const getProjects = async (_req, res) => {
    const result = await projectService.getProjects();

    return res.status(200).json(result);
};

module.exports = { getProjects }