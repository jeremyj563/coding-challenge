import { addAllDocs } from '@jeremyj563/cc-common'
import jsonfile from 'jsonfile'

// import dotenv from 'dotenv'
// dotenv.config({path: './.env.dev'})

async function getSeedCollections() {
    const customers = await jsonfile.readFile('./customers.json')
    const products = await jsonfile.readFile('./products.json')
    const orders = await jsonfile.readFile('./orders.json')
    return { customers, products, orders }
}

async function main() {
    const collections = await getSeedCollections()

    for (const collectionName in collections) {
        const docs = collections[collectionName]
        await addAllDocs(collectionName, docs)
    }
}

main()