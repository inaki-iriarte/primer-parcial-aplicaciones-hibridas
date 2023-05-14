import {MongoClient, ObjectId} from 'mongodb'

const client = new MongoClient("mongodb://127.0.0.1:27017")
const db = client.db("AH20231CP1")

async function getProjectsBySection(filter) {
    await client.connect()
    return db.collection("Projects").find(filter).toArray()
}

async function getProjects(filter = {}) {
    const filterMongo = {}

    if(filter?.section){
        filterMongo.$text = {$search: filter.section}
    }

    if(filter?.technologies){
        filterMongo.technologies = { $all: filter.technologies.split(';')}
    }

    await client.connect()
    return db.collection("Projects").find(filterMongo).toArray()
}

async function editProject(idProject, project) {
    await client.connect()
    await db.collection("Projects").updateOne({_id: new ObjectId(idProject)}, {$set: project})
    return project
}

async function deleteProject(idProject) {
    await client.connect()
    await db.collection("Projects").deleteOne({_id: new ObjectId(idProject)})
    return { id: idProject}
}

async function createProject(project) {
    await client.connect()
    await db.collection("Projects").insertOne(project)
    return project
}

export {
    getProjectsBySection,
    getProjects,
    editProject,
    deleteProject,
    createProject
}