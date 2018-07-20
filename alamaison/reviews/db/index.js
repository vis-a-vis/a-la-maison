const mysql = require('mysql');
const connection = mysql.createConnection();


connection.query(function(err) {
  if (err) {
    console.error(err)
  }
  console.log('connected, locked and loaded!')
})



// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/3002');

// const userSchema = new Schema ({
//   _id: Number,
//   name: String,
// })

// const reviewSchema = new Schema({
//   _Id: Number,
//   postedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
//   createdAt: Date,
//   Message: String,
// })
  
// const hostSchema = new Schema({
//   _Id: Number,
//   Reply: String,
// })
  
// let User = mongoose.model('User', userSchema)
// let Review = mongoose.model('Review', reviewSchema)
// let Host = mongoose.model('Host', hostSchema)


// Review.findOne({_id: 123})
// .populate('postedBy')
// .exec(function(err, review) {
//   if (err) {
//     console.error(err)
//   } else {
//     //do something with review
//   }
// });
