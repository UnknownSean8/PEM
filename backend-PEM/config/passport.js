import asyncHandler from "express-async-handler";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/userModel.js";

const configurePassport = (passport) => {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: "/api/users/google/callback",
      },
      asyncHandler(async (accessToken, refreshToken, profile, done) => {
        try {
          const userExists = await User.findOne({
            email: profile.emails[0].value,
          });

          if (userExists) {
            done(null, userExists);
          } else {
            const user = await User.create({
              name: profile.displayName,
              email: profile.emails[0].value,
              password: "123",
            });
            done(null, user);
          }
        } catch (error) {
          res.status(400);
          throw new Error();
        }
      }),
    ),
  );

  // Serialize user to store in session
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // Deserialize user from session
  passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);

    if (user) {
      done(null, id);
    }
  });
};

export default configurePassport;
