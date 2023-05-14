import * as services from '../services/projects.services.js'
import * as views from '../views/projects.views.js'

function getProjectsBySection(req, res) {
    const section = req.params.section

    services.getProjectsBySection({section: section})
    .then(function (projects) {
        if (projects){
            res.send(views.createProjectsPage(projects, section))
        } else {
            res.send(views.createPage('Sección no encontrada', '<p>La sección buscada no existe o no hay proyectos que coincidan.</p>'))
        }
    })
}



export {
    getProjectsBySection
}