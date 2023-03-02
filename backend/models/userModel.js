const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    username: String,
    password: String
});

const User = mongoose.model('User', userSchema)

const user = new User({
    username: 'bob',
    password: 'bob'
})

user.save((err) => {
    if (err) throw err;
    console.log('New user added to the database');
});