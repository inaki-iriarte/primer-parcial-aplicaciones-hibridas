import * as services from '../../services/customers.services.js'

function getCustomers(req, res){
    services.getCustomers()
    .then(function (customers) {
        res.status(200).json(customers)
    })
}

function createCustomers(req, res){
    const customer = {
        name: req.body.name,
        img: req.body.img,
        description: req.body.description
    }

    if (req.body.projects_id){
        customer.projects_id = req.body.projects_id
    }

    services.createCustomers(customer)
    .then(function (customer) {
        res.status(201).json(customer)
    })
}

function getCustomerProjects(req, res){
    const idCustomer = req.params.idCustomer

    services.getProjectsByCustomerId(idCustomer)
    .then(function (projects) {
        if (projects) {
            res.status(200).json(projects)
        }
        else {
            res.status(404).json({error: {message: `Cliente #${idCustomer} no encontrado.`}})
        }
    })
}

export {
    getCustomers,
    createCustomers,
    getCustomerProjects
}