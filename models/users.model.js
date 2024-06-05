import mongoose from 'mongoose';

const mongooseUserSchema = new mongoose.Schema({
	name: String,
	email: String,
});

const User = mongoose.model('User', mongooseUserSchema);

export default User;
