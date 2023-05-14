import {Router} from 'express'
import * as controller from '../controllers/customers.api.controllers.js'

const route = Router()

route.get('/customers', controller.getCustomers) //Obtener todos los clientes
route.post('/customers', controller.createCustomers) //Crear un cliente
route.get('/customers/:idCustomer/projects', controller.getCustomerProjects) //Obtener los ids de los proyectos que pertenecen a un cliente particular

export default route