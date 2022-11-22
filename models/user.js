const { default: mongoose } = require("mongoose");
const moongoose = require("mongoose");
const Schema = moongoose.Schema;
const userSchema = new Schema({
    name: { type: String },
    email: { type: String, unique: true },
    password: { type: String, required: true },
    created_at: { type: Number, default: Date.now().valueOf() },
    update_at: { type: Number, default: Date.now().valueOf() }
});

module.exports = mongoose.model('User', userSchema)