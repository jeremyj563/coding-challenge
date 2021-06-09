import { CONSTANTS, getCollection } from '@local/common';
import jsonfile from 'jsonfile';

// function getSeedCollections() {
//     const customers = jsonfile.readFileSync('./db/customers.json')
//     const products = jsonfile.readFileSync('./db/products.json')
//     const orders = jsonfile.readFileSync('./db/orders.json')
//     return { customers, products, orders
//     }
// }

// function insertCollection(dbName, collectionName, docs) {
// }

// const collections = getSeedCollections()

// for (const collectionName in collections) {
//     const docs = collections[collectionName]
//     insertCollection(CONSTANTS.dbName, collectionName, docs)
// }

async function getSeedCollectionsAsync() {
    const customers = await jsonfile.readFile('./customers.json')
    const products = await jsonfile.readFile('./products.json')
    const orders = await jsonfile.readFile('./orders.json')
    return { customers, products, orders }
}

async function insertCollectionAsync(dbName, collectionName, docs) {
    const { collection, client } = await getCollection(dbName, collectionName)
    await collection.insertMany(docs)
    await client.close()
}

(async function () {
    const collections = await getSeedCollectionsAsync()
    //console.log(collections)

    for (const collectionName in collections) {
        const docs = collections[collectionName]
        await insertCollectionAsync(CONSTANTS.dbName, collectionName, docs)
    }

    //collections.forEach(c => await insertCollection(CONSTANTS.dbName, c.key, c.value))
    //const johnDoe = newCustomer()  
    //const cmdResult = await collection.insertOne(johnDoe)
    //console.log(cmdResult.result)
    //const docs = collection.find({})
    //console.log(docs)
    //await client.close()
})()