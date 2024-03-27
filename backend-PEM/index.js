import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
const port = process.env.PORT | 5000;

import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import userRoutes from "./routes/userRoutes.js";
import quizRoutes from "./routes/quizRoutes.js";

import passport from "passport";
import session from "express-session";
import configurePassport from "./config/passport.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./utils/swagger-output.json" assert { type: "json" };
import cors from "cors";

// connectDB();

const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// app.use('/api/v1', router);
app.use(express.json());

app.use(cors());
// app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());

// app.use(
//   session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false,
//   })
// );
// app.use(passport.initialize());
// app.use(passport.session());

configurePassport(passport);

// app.use(
//   "/api/users",
//   userRoutes
//   /*
//   #swagger.tags = ['User']
// */
// );

app.use("/api/quiz", quizRoutes);

app.get("/", (req, res) => res.send("Server is ready."));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Listening to port ${port}`));

// - **POST /api/users - Register a user
// - **POST /api/users/auth - Authenticate a user and get token
// - **POST /api/users/logout - Logout user and clear cookie
// - **GET /api/users/profile - Get user profile
// - **PUT /api/users/progile - Update profile

// Why the dependency

// Test: Demo
// Integration, unit test
