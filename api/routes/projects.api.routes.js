import {Router} from 'express'
import * as controller from '../controllers/projects.api.controllers.js'

const route = Router()

route.get('/projects', controller.getProjects) //Traer todos los proyectos
route.patch('/projects/:idProject', controller.updateProject) //Modificar un proyecto
route.delete('/projects/:idProject', controller.deleteProject) //Eliminar un proyecto
route.post('/projects', controller.createProject) //Crear un proyecto

export default route