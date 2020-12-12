const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    created: {
        type: Date,
        default: Date.now,
    },
    polls: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Poll' }]
});
userSchema.pre('save', async function (next) {
    try {
        if (!this.isModified('password')) {
            return next();
        }
        const hashed = bcrypt.hash(this.password, 10);
        this.password = hashed;
        return next();
        
    } catch (error) {
        return next(error);
    }
});

userSchema.methods.comparePasswords = async function (attempt, next) {
    
}

module.exports = mongoose.model('User', userSchema);