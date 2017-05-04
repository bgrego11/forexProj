var mongoose = require("mongoose");

// Create the Schema class
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: {
    type: String,
    required: "username is Required",
  },
  email: {
      type: String,
      required: "email required"
  },
  hashPass: {
    type: String,
    required: "pw is Required",
  } 
});

var User = mongoose.model("User", userSchema);

// Export the model so the server can use it
module.exports = User;