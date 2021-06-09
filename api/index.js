import { constants, getAllDocs } from '@local/common'
import express from 'express'

const app = express()

app.get('/customers', getCustomers)
app.get('/products', getProducts)
app.get('/orders', getOrders)

const port = constants.apiPort
const host = constants.apiHost

app.listen(port, host)
console.log(`Running on http://${host}:${port}`)

async function getCustomers(request, response) {
    const { docs: customers, client } = await getAllDocs('customers')
    response.send(customers)
}

async function getProducts(request, response) {
    const { docs: products, client } = await getAllDocs('products')
    response.send(products)
}

async function getOrders(request, response) {
    const {docs: orders, client } = await getAllDocs('orders')
    response.send(orders)
}