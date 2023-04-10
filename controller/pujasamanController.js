import pujaSamanModel from "../moduls/pujsamanModul.js";


const pujaSamanForm = (req, res)=>{
     res.render("pujasaman/pujasamanadd.ejs");
}

const createPujasaman = async (req, res) => {
  console.log(req.body);
  const { name, quantity, price, image} = req.body;
  if (name && quantity && price && image) {
    try {
      const pujasamanCreate = await pujaSamanModel.create({
        name,
        quantity,
        price,
        image
      });
       res.redirect("/pujasaman/show");
    } catch (error) {
      console.log(error.message);
    }
  } else {
    res.send({
      statuse: "failed",
      message: "Please input all feild.",
    });
  }
};

const showPujasaman = async (req, res) => {
     
  try {
    const pujasaman = await pujaSamanModel.find();
     res.render("pujasaman/pujasaman.ejs", { data: pujasaman });
    
  } catch (error) {
    console.log(error.message);
  }
};

const editPujasaman = async (req, res) => {
 
 
  try {
     const pujasamanEdit = await pujaSamanModel.findById(req.params.id);
      console.log(pujasamanEdit);
     
     res.render("pujasaman/pujasamsnEdit.ejs", {data: pujasamanEdit});
  } catch (error) {
    console.log(error.message);
  }
};

const updatePujasaman = async (req, res) => {
  try {
    const pujasamanUpdate = await pujaSamanModel.findByIdAndUpdate( req.params.id, { $set: req.body });
    res.redirect("/pujasaman/show");

  } catch (error) {
    console.log(error.message);
  }
};

const deletePujasaman = async (req, res) => {
  try {
    const pujasamanDelete = await pujaSamanModel.findByIdAndDelete(req.params.id);
     res.redirect("/pujasaman/show");
  } catch (error) {
    console.log(error.message);
  }
};

const pujaSamanAPI= async (req,res)=>{
    try{
        
      const apiPujaSaman = await pujaSamanModel.find();
      res.send(apiPujaSaman);

    }catch(error){
      console.log(error.message);
    }
}

export {
  pujaSamanForm,
  createPujasaman,
  showPujasaman,
  editPujasaman,
  updatePujasaman,
  deletePujasaman,
  pujaSamanAPI
};
