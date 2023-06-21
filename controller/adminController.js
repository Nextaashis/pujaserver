import adminModel from "../moduls/adminModul.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const createadmin = async (req, res) => {
 
  const { name, email, password, comfrimpassword } = req.body;
 
  if (name && email && password && comfrimpassword) {
        try {
          if (password === comfrimpassword) {
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(password, salt);
            const adminCreate = await adminModel.create({
              name,
              email,
              password: hashPassword,
              comfrimpassword: hashPassword,
            });
            res.send({
              "statuse": "sucess",
              message: "Create admin account.",
            });
          }else {
            res.send({
              ststuse: "failed",
              message: "Pasword not match.",
            });
          }
        } catch (error) {
          console.log(error.message);
        }
      }else {
    res.send({
      ststuse: "failed",
      message: "All Feiled required",
    });
  }
};

const showadmin = async (req, res) => {
  try {
    const adminList = await adminModel.find();

    res.send(adminList);
  } catch (error) {
    res.send(error.message);
  }
};

async function deleteadmin(req, res) {
  try {
    const adminDelet = await adminModel.findByIdAndDelete(req.params.id);

    res.send({
      ststuse: "sucess",
      message: "Delete admin.",
    });
  } catch (error) {
    res.send(error.message);
  }
}

const loginAdmin = async (req, res) => {
  
  const { email, password } = req.body;
  if (email && password) {
    const findEmail = await adminModel.findOne({ email: email });
    if (findEmail) {
      try {
        const passswordCompair = await bcrypt.compare(
          password,
          findEmail.password
        );
        if (passswordCompair) {
          const token = jwt.sign(
            { userID: findEmail._id },
            process.env.jwtKey,
            {
              expiresIn: "5d",
            }
          );

          res.send({
            status: "Success",
            message: "You are login.",
            token: token,
          });

          console.log(token);
        } else {
          res.send({
            ststuse: "failed",
            message: "Woring Password.",
          });
        }
      } catch (error) {
        console.log(error.message);
      }
    } else {
      res.send({
        ststuse: "failed",
        message: "Email Not found",
      });
    }
  } else {
    res.send({
      ststuse: "failed",
      message: "All Feiled required",
    });
  }
};

export { loginAdmin, createadmin, showadmin, deleteadmin };
