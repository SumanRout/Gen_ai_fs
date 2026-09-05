// const express=require('express')

const {Router}=require('express')
const authRouter=Router()
const authController=require("../controller/auth.controller")
const authmiddleware=require("../middlewares/auth.middleware")


/**
 * @routes post/api/auth/register
 * @description register a new user
 * @access public
 */

authRouter.post("/register",authController.registerUserController)

/**
 * @route post/api/auth/login
 * @description login user name with email,password
 * @access public
 */

authRouter.post("/login",authController.loginController)

/**
 * @name get /api/auth/logout
 * @description clear token from user cookie and add the token in blacklist
 * @access public
 *
 */

authRouter.get("/logout",authController.logoutController)


/**
 * @route get /api/auth/get-me
 * @description get the current logged in user
 * @access private
 */
authRouter.get("/get-me",authmiddleware.authUser,authController.getmeController)

/**
 * @ route post/api/auth/google
 * @description login user with google oauth
 * @access public
 */
authRouter.post("/google",authController.googleAuthController)

module.exports=authRouter