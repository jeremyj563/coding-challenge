import { getCollection } from '@local/common';

(async function () {    
    function newCustomer() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            address: '123 Hill St',
            city: 'Melvin',
            state: 'CA',
            zip: 93612
        }
    }
    
    const { collection, client } = await getCollection('coding-challenge', 'customers')
    const johnDoe = newCustomer()
    
    const cmdResult = await collection.insertOne(johnDoe)
    console.log(cmdResult.result)
    //const docs = collection.find({})
    //console.log(docs)
    client.close()
})()