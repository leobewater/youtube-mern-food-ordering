import { auth } from "express-oauth2-jwt-bearer";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/user";

// extend the Express's Request type
declare global {
  namespace Express {
    interface Request {
      userId: string;
      auth0Id: string;
    }
  }
}

export const jwtCheck = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_ISSUER_BASE_URL,
  tokenSigningAlg: "RS256",
});

export const jwtParse = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // get the access token from the authorization header
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    return res.sendStatus(401);
  }

  // get the access token
  const token = authorization.split(" ")[1];

  try {
    const decoded = jwt.decode(token) as jwt.JwtPayload;
    // get user's auth0Id
    const auth0Id = decoded.sub;

    const user = await User.findOne({ auth0Id });
    if (!user) {
      return res.sendStatus(404);
    }

    // add to incoming request
    req.auth0Id = auth0Id as string;
    req.userId = user._id.toString();
    next();
  } catch (error) {
    return res.sendStatus(401);
  }
};
