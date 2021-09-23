import getData from './lib/service.js'

//call getData function
const data = await getData(1);

//log data
console.log(data);