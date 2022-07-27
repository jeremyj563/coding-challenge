import { addAllDocs } from '@jeremyj563/cc-common'
import jsonfile from 'jsonfile'

async function getSeedCollections() {
    const customers = await jsonfile.readFile('./db-seed/customers.json')
    const products = await jsonfile.readFile('./db-seed/products.json')
    const orders = await jsonfile.readFile('./db-seed/orders.json')
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