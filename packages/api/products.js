import { outResponse } from './util.js'
import { getDoc, getAllDocs } from '@jeremyj563/cc-common'

async function getProduct(request, response) {
    const id = parseInt(request.params.id)
    const product = await getDoc('products', id)
    outResponse(response, product)
}

async function getProducts(request, response) {
    const products = await getAllDocs('products')
    outResponse(response, products)
}

export {
    getProduct,
    getProducts
}