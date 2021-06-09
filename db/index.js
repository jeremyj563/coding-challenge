import { constants, addAllDocs } from '@local/common'
import jsonfile from 'jsonfile'

async function getSeedCollections() {
    const customers = await jsonfile.readFile('./customers.json')
    const products = await jsonfile.readFile('./products.json')
    const orders = await jsonfile.readFile('./orders.json')
    return { customers, products, orders }
}

(async function () {
    const collections = await getSeedCollections()

    for (const collectionName in collections) {
        const docs = collections[collectionName]
        await addAllDocs(collectionName, docs)
    }
})()