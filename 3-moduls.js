// os module
const os=require('os')

//info about curr user
const user=os.userInfo()
console.log(user)

// method returns the system uptime in seconds

console.log(`the sys uptime is ${os.uptime()} seconds`)
const currentOS={
  name: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freemem: os.freemem(),
}
console.log(currentOS)