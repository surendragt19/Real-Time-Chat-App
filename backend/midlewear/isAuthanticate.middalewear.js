import jwt from 'jsonwebtoken';

const isAuthenticate = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ status: 'User Not Authenticated' });
    }
    const decodedToken = await jwt.verify(token, process.env.SCE_KEY);
    if (!decodedToken) {
      return res.status(401).json({ status: 'Invalid Token' });
    }

    req.userId = decodedToken.userId; 
    next();
  } catch (error) {
    console.error('Error in authentication middleware:', error);
    res.status(500).json({ status: 'Server error in authentication' });
  }
};

export default isAuthenticate;
