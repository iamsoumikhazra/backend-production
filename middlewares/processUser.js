import User from '../models/users.model.js';
import userSchema from '../utils/validation/usersValidate.js';

const processUser = async (req, res, next) => {
	try {
		const userData = userSchema.parse(req.body);
		const user = new User(userData);
		const result = await user.save();
		req.user = result; // Store the result in the request object to access it in the next middleware or route handler
		next();
	} catch (error) {
		console.log(error);
		res.status(400).send(error.message);
	}
};

export default processUser;
