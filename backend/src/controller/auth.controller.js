const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const tokenBlackListModel = require("../models/blacklist.model");

/**
 * @name registerUserController
 * @route post /api/auth/register
 */

/**
 * @name login controller
 * @description login a user ,expecting email and password in the request body
 * @access public
 */

async function loginController(req, res) {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });

  if (!user) {
    return res.status(400).json({
      message: "user does not exist",
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    res.status(400).json({
      message: "invalid password",
    });
  }

  const token = jwt.sign(
    { id: user._id, username: user.username },
    process.env.jwt_secret,
    { expiresIn: "1d" },
  );
  res.cookie("token", token);
  res.status(200).json({
    message: "User logged in successfully",
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  });
}

// register controller
async function registerUserController(req, res) {
  const { username, email, password } = req.body;
  /*

 Input Validation & Fail-Fast: It is far more efficient to reject a bad request *immediately* in your controller before it even touches the database layer. This reduces unnecessary processing and database load.
User Experience: You can provide a specific, readable error message to the client (e.g., "Please provide all fields") rather than waiting for a database-level validation error, which might be less descriptive or harder for the frontend to parse.
Sanitization: Validating at the controller allows you to ensure the incoming data is not just present, but also formatted correctly (e.g., checking for valid email patterns or password length) *before* it gets handled by your logic.
Security: Relying solely on the database schema for validation is a "last line of defense." Always validating incoming data at the entry point of your API prevents potentially malformed or malicious data from polluting your backend flow.
 */
  if (!username || !email || !password) {
    return res.status(400).json({
      message: "provide username,email,password",
    });
  }
  const isUserAlreadyExists = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (isUserAlreadyExists) {
    if (isUserAlreadyExists.username == username) {
      return res.status(400).json({
        message: `${username} is already exist`,
      });
    }

    return res.status(400).json({
      message: `${email} already exist`,
    });
  }
  const hash = await bcrypt.hash(password, 10);
  const user = await userModel.create({
    username,
    email,
    password: hash,
  });
  const token = jwt.sign(
    { id: user._id, username: username },
    process.env.jwt_secret,
    { expiresIn: "1d" },
  );
  res.cookie("token", token);

  res.status(201).json({
    message: "User registered successfully",
    user: {
      id: user._id,
      username: user.username,
      emial: user.email,
    },
  });
}

async function logoutController(req, res) {
  // Check if cookies object even exists before asking for the token
  const userToken = req.cookies?.token;

  // OR add a guard clause to handle the scenario gracefully
  if (!req.cookies || !req.cookies.token) {
    
    return res
      .status(400)
      .json({ message: "No token provided or already logged out" });
  }

  if (userToken) {
    await tokenBlackListModel.create({ token: userToken });
  }
  res.clearCookie("token");
  res.status(200).json({
    message: "user logout successfully",
  });
}

/**
 * @route get /get-me
 * @description get the current logged in user
 * @access private
 */
async function getmeController(req,res){
  const user=await userModel.findById(req.user.id)
  res.status(200).json({
    "message":"user details fetched successfully",
    user:{
    id:user._id,
    email:user.email,
    username:user.username
    }
  })
}

module.exports = { registerUserController, loginController, logoutController,getmeController };
