import mongodb from 'mongodb'
import { domainToASCII } from 'node:url'
const { MongoClient } = mongodb

const URL = 'mongodb://localhost:27017/mydb'

async function newClient() {
    const client = await MongoClient.connect(URL, { useUnifiedTopology: true })
    return client
}

async function getCollection(databaseName, collectionName) {
    const client = await newClient()
    const db = client.db(databaseName)
    const collection = db.collection(collectionName)
    return { collection, client }
}

async function getAllDocs(databaseName, collectionName) {
    const { collection, client } = await getCollection(databaseName, collectionName)
    const cursor = collection.find()
    const docs = await cursor.toArray()
    return { docs, client }
}

export { 
    getAllDocs,
    getCollection
}