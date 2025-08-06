const mongoose = require('mongoose')
const bycrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'driver'], default: 'admin' }
})

userSchema.pre('save', async function () {
    if (!this.isModified('password')) return
    this.password = await bycrypt.hash(this.password, 10)
})

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bycrypt.compare(enteredPassword, this.password)
}

module.exports = mongoose.model('User', userSchema)