import express from 'express'
import ProjectRoute from './routes/projects.routes.js'
import ProjectRouteApi from './api/routes/projects.api.routes.js'
import CustomerRouteApi from './api/routes/customers.api.routes.js'

const app = express()

app.use('/api', express.json())

app.use('/', express.static('public'))
app.use('/', ProjectRoute)
app.use('/api', ProjectRouteApi)
app.use('/api', CustomerRouteApi)

app.listen(2222, function(){
    console.log('Servidor corriendo en el host http://localhost:2222')
})