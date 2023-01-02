const { Project } = require('../models/teamManager.model');
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createProject = (request, response) => {
    const { name,date,status } = request.body;
Project.create({
    name,date,status
    })
        .then(Project => response.json(Project))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllProjects = (request, response) => {
    Project.find({})
        .then(Projects => response.json(Projects))
        .catch(err => response.json(err))
}
module.exports.getProject = (request, response) => {
    Project.findOne({_id:request.params.id})
        .then(Project => response.json(Project))
        .catch(err => response.json(err))
}

module.exports.updateProject = (request, response) => {
    Project.findOneAndUpdate({_id: request.params.id}, request.body, {
        new: true,
        runValidators: [true, "{PATH} is required"],
      })
        .then(updatedProject => response.json(updatedProject))
        .catch(err => response.status(400).json(err));
}
module.exports.deleteProject = (request, response) => {
    Project.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

module.exports.updateStatusProject = (request, response) => {
    Project.findOneAndUpdate({_id: request.params.id}, request.body, {
        new: true,
        runValidators: [true, "{PATH} is required"],
      })
        .then(updatedProject => response.json(updatedProject))
        .catch(err => response.status(400).json(err));
}


