import jwt from "jsonwebtoken";
import adminUser from "../moduls/userModuls.js";

const checkAuthUser = async (req, res, next) => {
  let token;
  const { authorization } = req.headers;
  if (authorization && authorization.startsWidth("Bearer")) {
    try {
      token = authorization.split(" ")[1];
      // Verify token
      const { userID } = await jwt.verify(token, process.env.jwtKey);

      // Get user From Token
      req.user = await adminUser.findOne(userID).select("-password");
      next();
    } catch (error) {
      if (!token) {
        res.status(201).send({
          status: "Failled",
          message: "Something else..",
          token: token,
        });
      }
    }
  }
};

export default checkAuthUser;
