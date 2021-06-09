import mongodb from 'mongodb'
const { MongoClient } = mongodb

const CONSTANTS = {
    url: 'mongodb://localhost:27017/mydb',
    dbName: 'coding-challenge'
}

async function newClient() {
    const url = CONSTANTS.url
    const options = { useUnifiedTopology: true }
    const client = await MongoClient.connect(url, options)
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
    CONSTANTS,
    getAllDocs,
    getCollection
}