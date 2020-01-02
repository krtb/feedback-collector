const mongoose = require('mongoose'); 
const { Schema } = mongoose;

// can freely as properties
const userSchema  = new Schema({
   googleId: String, 
});

mongoose.model('users', userSchema);