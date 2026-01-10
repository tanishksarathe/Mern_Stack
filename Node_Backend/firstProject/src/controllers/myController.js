import User from "../models/userMode.js";

export const userRegistration = async (req, res, next) => {
  try {
    const { fullname, email, phone, password } = req.body;

    if (!fullname || !email || !phone || !password) {
      const error = new Error("All Fields Required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      const error = new Error("Email Already Exists");
      error.statusCode = 409;
      return next(error);
    }

    const newUser = await User.create({ fullname, email, phone, password });
    console.log(newUser);

    res.status(201).json({
      message: "User Created Successfully",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      const error = new Error("All Fields Required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      const error = new Error("User Not Found");
      error.statusCode = 404;
      return next(error);
    }

    const isVerified = password === existingUser.password;

    if (!isVerified) {
      const error = new Error("User Unauthorized");
      error.statusCode = 401;
      return next(error);
    }

    console.log(existingUser);

    res.status(201).json({
      message: "Welcome back",
      data: existingUser,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const userLogOut = async (req, res, next) => {
  try {
    res.status(200).json({
      message: "Logout Successful",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const userUpdate = async (req,res,next) => {
  try {
    const { fullname, email, phone } = req.body;

    if (!fullname || !email || !phone) {
      const error = new Error("All Fields Required");
      error.statusCode = 400;
      return next(error);
    }

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      const error = new Error("User Not Found");
      error.statusCode = 404;
      return next(error);
    }

    existingUser.fullname = fullname;
    existingUser.phone = phone;

    await existingUser.save();

    res
      .status(200)
      .json({ message: "Data Updated Successfully", data: existingUser });

  } catch (error) {
    console.log(error);
    next(error);
  }
};
