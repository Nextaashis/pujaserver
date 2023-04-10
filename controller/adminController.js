import adminModel from '../moduls/adminModul.js'
import bcrypt from 'bcryptjs';

const adminfrom = (req, res) => {
  res.render("admin/adminRegister.ejs");
};

const createadmin = async (req, res) => {
     const{ name, email, password, comfrimpassword} = req.body;
      if (name && email && password && comfrimpassword) {
        const findEmail = await adminModel.find({email:email});
        if (findEmail){
           res.send({
             ststuse: "failed",
             message: "Email already used Please use anothe email.",
           });

        }else{
          if (password === comfrimpassword) {
            try {
              const salt = await bcrypt.genSalt(10);
              const hashPassword = await bcrypt.hash(password, salt);
              const adminCreate = await adminModel.create({
                name,
                email,
                password: hashPassword,
                comfrimpassword: hashPassword,
              });

              res.render("admin/adminRegister.ejs");
            } catch (error) {
              console.log(error.message);
            }
          } else {
            res.send({
              ststuse: "failed",
              message: "Pasword not match.",
            });
          }
        }
      } else {
        res.send({
          ststuse: "failed",
          message: "All Feiled required",
        });
      }
};

const showadmin = async (req, res) => {
   try{
    const adminList = await adminModel.find();


    res.render("admin/adminProfile.ejs", {data: adminList});
   }catch(error){
    res.send(error.message)
   }
    
};
// const editadmin = (req, res) => {
//     res.render("admin/adminEdit.ejs")
// };
// 
// const updateadmin = (req, res) => {};

const deleteadmin = async(req, res) => {
  try {
    const adminDelet = await  adminModel.findByIdAndDelete(req.params.id);
    res.redirect('/admin/admin');
  } catch (error) {
    res.send(error.message);
  }
};

export {
  adminfrom,
  createadmin,
  showadmin,
 
  
  deleteadmin,
};
