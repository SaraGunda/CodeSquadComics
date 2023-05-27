
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/courseProject').catch(error => console.log("error"))


const mongoose = require('mongoose');


main().catch(err => console.log(err));
  async function main() {
  await mongoose.connect(process.env.DB_URL)};  


