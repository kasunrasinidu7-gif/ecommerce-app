export const authorize = (...roles) => {

    return (req, res, next) => {

        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                success: false,
                message: "Access denied. You do not have the required role."
            });
        }

        console.log("User got access to the route with role:", req.user.role);
        next();
    };

};