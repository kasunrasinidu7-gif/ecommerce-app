import jwt from 'jsonwebtoken';

export const authenticateToken = (req, res, next) => {
  
    const authHeader = req.headers.authorization;
    console.log(authHeader);
    
    if (!authHeader|| !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
            success: false,
            message: 'Access denied. No token provided.'
        });
    }

    const token = authHeader.split(' ')[1];
    const decoded =jwt.verify(token, process.env.JWT_SECRET);

    console.log(decoded);
    req.user = decoded; 
    next();

};