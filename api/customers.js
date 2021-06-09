import { outResponse } from './util.js'
import { getDoc, getAllDocs } from '@local/common'

async function getCustomer(request, response) {
    const id = parseInt(request.params.id)
    const customer = await getDoc('customers', id)
    outResponse(response, customer)
}

async function getCustomers(request, response) {
    const customers = await getAllDocs('customers')
    outResponse(response, customers)
}

export {
    getCustomer,
    getCustomers
}