import ip from 'ip'
import fs from 'fs'
import os from 'os'

const dbHost = ip.address()
const dbPort = '27017'

fs.writeFileSync('env.list', `DBHOST=${dbHost}`)
fs.appendFileSync('env.list', `${os.EOL}DBPORT=${dbPort}`)