import { constants, getDoc, getAllDocs } from '@local/common'
import express from 'express'

const app = express()

app.get('/customers/:id', getCustomer)

app.get('/customers', getCustomers)
app.get('/products', getProducts)
app.get('/orders', getOrders)

const port = constants.apiPort
const host = constants.apiHost

app.listen(port, host)
console.log(`Running on http://${host}:${port}`)

async function getCustomer(request, response) {
    const id = request.params.id // need to cast to int
    const customer = await getDoc('customers', id)
    response.send(customer)
}

async function getCustomers(request, response) {
    const customers = await getAllDocs('customers')
    response.send(customers)
}

async function getProducts(request, response) {
    const products = await getAllDocs('products')
    response.send(products)
}

async function getOrders(request, response) {
    const orders = await getAllDocs('orders')
    response.send(orders)
}