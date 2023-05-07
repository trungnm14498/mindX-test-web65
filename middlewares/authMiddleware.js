import jwt from "jsonwebtoken";
const JWT_SECRET = "MY_SECRET_KEY";

const authMiddleware = (req, res, next) => {
	try {
		const validToken = req.headers.authorization.replace("Bearer ", "");
		jwt.verify(validToken, JWT_SECRET);
		next();
	} catch (error) {
		res.status(401).json({ message: 'Invalid Token' });
	}
};

export default authMiddleware;