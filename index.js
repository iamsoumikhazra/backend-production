import express from 'express';
import connectDB from './db/index.js';
import processUser from './middlewares/processUser.js';

const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());

connectDB();

app.post('/users', processUser, (req, res) => {
	res.send(req.user);
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});

// ANOTHER WAY OF DOING THE SAME THING BUT WITH ONE FILE

// import express from "express";
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import { z } from "zod";

// dotenv.config({
//   path: "./.env",
// });

// const port = process.env.PORT || 3000;

// const app = express();

// app.use(express.json());

// const connectDB = (async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI  );
//     console.log("MongoDB connected");
//   } catch (error) {
//     console.log(error);
//     process.exit(1);
//   }
// })()

// const userSchema = z.object({
//   name: z.string(),
//   email: z.string().email(),
// });

// const mongooseUserSchema = new mongoose.Schema({
//   name: String,
//   email: String,
// });

// const User = mongoose.model("User", mongooseUserSchema);

// app.post("/users", async (req, res) => {
//   try {
//     const userData = userSchema.parse(req.body);
//     const user = new User(userData);
//     const result = await user.save();
//     res.send(result);
//   } catch (error) {
//     console.log(error);
//     res.status(400).send(error.message);
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
