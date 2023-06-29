const { ProjectModel } = require('../database/models');

const getProjects = async () => {
    const result = await ProjectModel.findAll();

    return result;
};

module.exports = { getProjects };