import mongodb from 'mongodb'
const { MongoClient } = mongodb

const constants = {
    dbUrl: 'mongodb://localhost:27017/mydb',
    dbName: 'coding-challenge',
    apiHost: '0.0.0.0',
    apiPort: 8080
}

async function newClient() {
    const url = constants.dbUrl
    const options = { useUnifiedTopology: true }
    const client = await MongoClient.connect(url, options)
    return client
}

async function getCollection(collectionName, databaseName = constants.dbName) {
    const client = await newClient()
    const db = client.db(databaseName)
    const collection = db.collection(collectionName)
    return { collection, client }
}

async function getAllDocs(collectionName, databaseName = constants.dbName) {
    const { collection, client } = await getCollection(collectionName, databaseName)
    const cursor = collection.find()
    const docs = await cursor.toArray()
    client.close()
    return docs
}

async function getDoc(collectionName, id, databaseName = constants.dbName) {
    const { collection, client } = await getCollection(collectionName, databaseName)
    const cursor = collection.find({ id })
    const doc = await cursor.count()
    debugger
    client.close()
    return doc
}

async function addAllDocs(collectionName, docs, databaseName = constants.dbName) {
    const { collection, client } = await getCollection(collectionName, databaseName)
    await collection.insertMany(docs)
    await client.close()
}

export {
    constants,
    getDoc,
    getAllDocs,
    addAllDocs
}