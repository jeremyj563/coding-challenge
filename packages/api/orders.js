import { outResponse } from './util.js'
import { getDoc, getAllDocs } from '@jeremyj563/cc-common'

async function getOrder(request, response) {
    const id = parseInt(request.params.id)
    const order = await getDoc('orders', id)
    outResponse(response, order)
}

async function getOrders(request, response) {
    const orders = await getAllDocs('orders')
    outResponse(response, orders)
}

export {
    getOrder,
    getOrders
}