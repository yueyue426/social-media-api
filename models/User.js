const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must match a valid email address'],
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought',
        },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },
    ],
},
{
    toJSON: {
        virtuals: true,
    },
    id: false,
});

// Create a virtual property to retrieves the length of the user's friends array
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

// Initialize the User model
const User = model('User', userSchema);

module.exports = User;