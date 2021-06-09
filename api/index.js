import { constants } from '@local/common'
import { getCustomer, getCustomers } from './customers.js'
import { getProduct, getProducts } from './products.js'
import { getOrder, getOrders } from './orders.js'
import express from 'express'

const app = express()

app.get('/customers/:id', getCustomer)
app.get('/products/:id', getProduct)
app.get('/orders/:id', getOrder)

app.get('/customers', getCustomers)
app.get('/products', getProducts)
app.get('/orders', getOrders)

const port = constants.apiPort
const host = constants.apiHost

app.listen(port, host)
console.log(`Running on http://${host}:${port}`)