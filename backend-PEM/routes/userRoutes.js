import express from "express";
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";
import passport from "passport";

const router = express.Router();

router.post(
  "/",
  registerUser,
  /*
  #swagger.summary = "Create a new User"
  #swagger.description = "Create a new User"
*/
);

router.post(
  "/auth",
  authUser,
  /*
  #swagger.summary = "Login a User"
  #swagger.description = "Login a User"
*/
);
router.get(
  "/logout",
  logoutUser,
  /*
  #swagger.summary = "Logout a User"
  #swagger.description = "Logout a User"
*/
);
router
  .route("/profile")
  .get(
    protect,
    getUserProfile,
    /*
  #swagger.summary = "Get current User profile"
  #swagger.description = "Get current User profile"
*/
  )
  .put(
    protect,
    updateUserProfile,
    /*
  #swagger.summary = "Update current User"
  #swagger.description = "Create current User"
*/
  );

router.get(
  "/google",
  /*
    #swagger.summary = "Google OAuth User"
    #swagger.description = "Google OAuth User"
    #swagger.security = [{
              "OAuth2": [
                  'read', 
                  'write'
              ]
      }]
     */
  passport.authenticate("google", { scope: ["profile", "email"] }),
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/");
  },
);

export default router;
