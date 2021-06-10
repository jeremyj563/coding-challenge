import ip from 'ip'
import fs from 'fs'

const dbHost = ip.address()
const dbPort = 27017

fs.writeFileSync('env.list', dbHost)
fs.appendFileSync('env.list', dbPort)