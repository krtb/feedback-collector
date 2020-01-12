const mongoose = require('mongoose'); 
const { Schema } = mongoose;

// can freely as properties
const userSchema  = new Schema({
   googleId: String, 
   credits: { type: Number, default: 0 }
});

mongoose.model('users', userSchema);