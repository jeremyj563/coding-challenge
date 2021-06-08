import { getAllDocs } from '@local/common'
import express from 'express'

const PORT = 8080
const HOST = '0.0.0.0'

const app = express()
app.get('/customers', getCustomers)

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)

async function getCustomers(request, response) {
    const { docs: customers, client } = await getAllDocs('coding-challenge', 'customers')
    response.send(customers)
}