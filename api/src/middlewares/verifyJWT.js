import jwt from 'jsonwebtoken';

export const verifyJWT = (req) => {
    try {
        const { authorization } = req.headers;
        if (!authorization) {
            throw new Error('No authorization header in the request');
        }
        const payload = jwt.verify(authorization, process.env.JWT_SECRET);
        req.user = payload; // Optionally, attach the payload to the request object
        return true;
    } catch (error) {
        return error.message;
    }
};
