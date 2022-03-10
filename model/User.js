const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    email:String,
    password:String
})



module.exports = mongoose.models.users || mongoose.model('users', userSchema);

// module.export = mongoose.model('users', userSchema);