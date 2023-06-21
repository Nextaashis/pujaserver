import jwt from "jsonwebtoken";
//import adminUser from "../moduls/userModuls.js";
import adminModul from "../moduls/adminModul.js";

const checkAdminAuthUser = async (req, res, next) => {
  console.log(req.authorization);
  let token;
  const { authorization } = req.headers;
  console.log(authorization);
  if (authorization && authorization.startsWidth("Bearer")) {
    try {
      token = authorization.split(" ")[1];
      // Verify token
      const { userID } = await jwt.verify(token, process.env.jwtKey);

      // Get user From Token
      req.user = await adminModul.findOne(userID).select("-password");
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

export default  checkAdminAuthUser;
