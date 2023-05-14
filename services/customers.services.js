import {MongoClient, ObjectId} from 'mongodb'

const client = new MongoClient("mongodb://127.0.0.1:27017")
const db = client.db("AH20231CP1")

async function getCustomers(){
    await client.connect()
    return db.collection("Cliente").find().toArray()
}

async function createCustomers(customer){
    await client.connect()
    await db.collection("Cliente").insertOne(customer)
    return customer
}

async function getProjectsByCustomerId(idCustomer){
    await client.connect()
    return db.collection("Cliente").findOne({_id: new ObjectId(idCustomer)}, {projection: {name: 0, img: 0, description: 0}})
}

export {
    getCustomers,
    createCustomers,
    getProjectsByCustomerId
}