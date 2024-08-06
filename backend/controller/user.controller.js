import { User } from '../models/user.models.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';


//register
export const registerController = async (req, res) => {
    try {
    const { username, fullname, password, gender, confirmPassword } = req.body;
        if (!fullname || !username || !password || !gender || !confirmPassword) {
          return res.status(401).json({
            message: "All Firels Required",
            success: false
        })
        }

        if (password !== confirmPassword) {
          return res.status(401).json({
            message: "Password Not Match.",
            success: false
        })
        }

        const existingUser = await User.findOne({ username });

        if (existingUser) {
          return res.status(401).json({
            message: "Your Username is Already takken",
            success: false
        })
        }

        const hashPassword = await bcryptjs.hash(password, 10);

        // Generate profile photo URLs
        const profilePhoto = gender === 'male'
            ? `https://avatar.iran.liara.run/public/boy?username=${username}`
            : `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = await User.create({
            fullname,
            username,
            password: hashPassword,
            gender,
            profilePhoto
        });

        return res.status(201).json({
          message: "Account created successfully.",
          success: true
      })
    } catch (error) {
        return res.status(501).json({
          message: "Server Error during registration.",
          success: false
      })
    }
};

//login
export const loginController = async (req, res) => {
    try {
      const { username, password } = req.body;
      if (!username || !password) {
        return res.status(400).json({ status: 'All fields required' });
      }
  
      const userExist = await User.findOne({ username });
      if (!userExist) {
        return res.status(400).json({ status: 'User does not exist' });
      }
  
      const isPasswordMatch = await bcryptjs.compare(password, userExist.password);
      if (!isPasswordMatch) {
        return res.status(400).json({ status: 'Incorrect password' });
      }
  
      const payload = {userId: userExist._id };
      const token =await jwt.sign(payload, process.env.SCE_KEY,{ expiresIn: '1d' });
  
      res.status(201)
        .cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true })
        .json({ status: "Login successful", _id: userExist._id, username: userExist.username,fullname:userExist.fullname,profilePhoto:userExist.profilePhoto, token });
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ status: 'Server error' });
    }
  };


  //logout
  export const logoutController=(req,res)=>{
    try {
        res.status(200).cookie("token","",{maxAge:0}).json({ status: "Login successful"})
    } catch (error) {
        console.error('Error during login:', error);
      res.status(500).json({ status: 'Server error' });
    }
  }

  //otheruser
  export const otherUserController = async (req, res) => {
    try {
      const loggedInUserId = req.userId;
      const otherUsers = await User.find({ _id: { $ne: loggedInUserId } }).select('-password');
      res.status(200).json({ status: 'All Other Users', otherUsers });
    } catch (error) {
      console.error('Error fetching other users:', error);
      res.status(500).json({ status: 'Server error' });
    }
  };