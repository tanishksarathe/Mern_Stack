import User from "../models/userMode.js";

export const userRegistration = async (req, res) => {
  try {
    const { fullname, email, phone, password } = req.body;

    if (!fullname || !email || !phone || !password) {
      res.status(400).json({ message: "All Fields Required" });
      return;
    }

    const newUser = await User.create({ fullname, email, phone, password });
    console.log(newUser);

    res.status(201).json({
      message: "User Created Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ message: "All Fields Required" });
      return;
    }

    const existingUser = await User.find({ email });

    if (!existingUser) {
      res.status(404).json({
        message: "User Not Found",
      });
      return;
    }

    const isVerified = password === existingUser.password;

    if (!isVerified) {
      res.status(401).json({
        message: "User Unauthorized",
      });
      return;
    }

    console.log(existingUser);

    res.status(201).json({
      message: "Welcome back",
      data: existingUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};



export const userLogOut = async (req, res) => {
  try {
    res.status(200).json({
      message: "Logout Successful",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
