import mongodb from 'mongodb';
const { MongoClient } = mongodb;
const Url = 'mongodb://localhost:27017/mydb';

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
    
    const client = await MongoClient.connect(Url, { useUnifiedTopology: true })
    
    const db = client.db('coding-challenge')
    const collection = db.collection('customers')
    const johnDoe = newCustomer()
    
    const cmdResult = await collection.insertOne(johnDoe)
    debugger
    console.log(cmdResult.result)
    //const docs = collection.find({})
    //console.log(docs)
    client.close()
})();