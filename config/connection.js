
// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/courseProject').catch(error => console.log("error"))


const mongoose = require('mongoose');

// mongoose.connect(process.env.DB_URL).catch(err => {
  // if(err) {
  //   console.log("There was an error.");  
  // }
  // console.log ("Connection successful!")
main().catch(err => console.log(err));
  async function main() {
  await mongoose.connect(process.env.DB_URL)};  

// mongoose.connect(process.env.DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
//   if(!err) {
//     console.log("You have successfully connected to the MongoDB server! Hooray!");  
//   }
//   else {
//       console.log("ERROR- there is a connectivity issue with MongoDB. Please review.");
//       console.log(err)
//   }
// });
