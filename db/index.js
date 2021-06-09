import { CONSTANTS, getCollection } from '@local/common'
import jsonfile from 'jsonfile'

async function getSeedCollections() {
    const customers = await jsonfile.readFile('./customers.json')
    const products = await jsonfile.readFile('./products.json')
    const orders = await jsonfile.readFile('./orders.json')
    return { customers, products, orders }
}

async function insertCollection(dbName, collectionName, docs) {
    const { collection, client } = await getCollection(dbName, collectionName)
    await collection.insertMany(docs)
    await client.close()
}

(async function () {
    const collections = await getSeedCollections()

    for (const collectionName in collections) {
        const docs = collections[collectionName]
        await insertCollection(CONSTANTS.dbName, collectionName, docs)
    }
})()