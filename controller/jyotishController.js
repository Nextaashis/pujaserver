import jyotishModel from "../moduls/jyotishModul.js";
import multer from "multer";

const showJyotishFrom = (req, res) => {
  res.render("jyotis/jyotishaddfrom.ejs");
};

const createJyotish = async (req, res) => {
  const { name, email, phone, aboutguru, image } = req.body;

  if (name && email && phone && aboutguru && image) {
    const findExistingEmail = await jyotishModel.findOne({ email: email });
    if (findExistingEmail) {
      res.send({
        statues: "Failed",
        message: "This Email already exist.",
      });
    } else {
      try {
        const addjyotish = await jyotishModel.create({
          name,
          email,
          phone,
          aboutguru,
          image,
        });
        res.redirect("/jyotish/show");
        // res.render("jyotish/showjyotis.ejs");
      } catch (error) {
        console.log(error.message);
      }
    }
  } else {
    res.send({
      statues: "Failed",
      message: "All feild required.",
    });
  }
};

const showJyotish = async (req, res) => {
  try {
  const jyotiShow = await jyotishModel.find();

  
    res.render("jyotis/showjyotis.ejs", { data: jyotiShow });
    //res.redirect("/jyotish/show", { data: jyotiShow });
  } catch (error) {
    console.log(error.message);
  }
};

const editJyotish = async (req, res) => {
  try {
    const jyotishFindByID = await jyotishModel.findById(req.params.id);
    res.render("jyotis/jyotishEdit.ejs", { data: jyotishFindByID });
  } catch (error) {
    console.log(error.message);
  }
};

const updateJyotish = async (req, res) => {
  try {
    const result = await jyotishModel.findByIdAndUpdate(
      { _id: req.params.id },
      { $set: req.body }
    );

    res.redirect("/jyotish/show");
  } catch (error) {
    console.log(error.message);
  }
};

const deleteJyotish = async (req, res) => {
  try {
    const result = await jyotishModel.findByIdAndDelete(req.params.id);

    res.redirect("/jyotish/show");
  } catch (error) {
    console.log(error.message);
  }
};

const showJyotishFromAPI = async (req, res )=>{
      try {
         const jyotiShow = await jyotishModel.find();
          res.send({ data: jyotiShow });
    
        }catch (error) {
            console.log(error.message);
          }
};


export {
  showJyotishFromAPI,
  showJyotishFrom,
  createJyotish,
  showJyotish,
  editJyotish,
  updateJyotish,
  deleteJyotish
 
};
