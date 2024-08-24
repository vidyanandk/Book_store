import User from "../model/user.model.js";
import bcrypt from "bcrypt"; // Import bcrypt for password hashing

export const signup = async (req, res) => {
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" }); // Use 409 Conflict
    }

    // Validate the input data
    const { fullname, email, password } = req.body;
    if (!fullname || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance
    const user = new User({
      fullname,
      email,
      password: hashedPassword, // Store the hashed password
    });

    // Save the new user to the database
    await user.save();

    res.status(201).json({ message: "User registered successfully" ,user:{
        _id: user._id,
        fullname: user.fullname,
        email: user.email
    }});
  } catch (error) {
    console.error("Error during signup:", error); // Log the error on the server
    res.status(500).json({ message: "Internal server error" }); // Send a generic error message
  }
};



export const login = async (req, res) => {
    try {
        // Check if the user exists
        const user = await User.findOne ({email: req.body.email});
        if (!user) {
            return res.status(401).json({message: "Invalid email or password"});
        }
        // Check if the password is correct
        const passwordMatch = await bcrypt.compare(req.body.password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({message: "Invalid email or password"});
        }
        res.status(200).json({message: "Login successful", user:{
            _id: user._id,
            fullname: user.fullname,
            email: user.email
        }});
    }
    catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({message: "Internal server error"});
    }
}