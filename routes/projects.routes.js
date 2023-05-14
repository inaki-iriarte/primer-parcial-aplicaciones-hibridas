import express from 'express'
import * as controller from '../controllers/projects.controllers.js'

const route = express.Router()

route.get('/:section', controller.getProjectsBySection)



export default route