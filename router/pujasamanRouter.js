import express from "express";
const pujasamanRouter = express.Router();
import {
  pujaSamanForm,
  createPujasaman,
  showPujasaman,
  editPujasaman,
  updatePujasaman,
  deletePujasaman,
  pujaSamanAPI
} from "../controller/pujasamanController.js";

pujasamanRouter.get("/", pujaSamanForm);
pujasamanRouter.post("/", createPujasaman);
pujasamanRouter.get("/show", showPujasaman);
pujasamanRouter.get("/edit/:id", editPujasaman);
pujasamanRouter.post("/update/:id", updatePujasaman);
pujasamanRouter.post("/delete/:id", deletePujasaman);
pujasamanRouter.get("/api/all", pujaSamanAPI);

export default pujasamanRouter;
