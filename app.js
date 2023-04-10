import dotenv from "dotenv";
import express from "express";
const app = express();
import { join } from "path";
import cors from "cors";
import router from "./router/userRouter.js";

import dbconection from "./config/databaseConfig.js";
import jyotishRouter from "./router/jyotishRouter.js";
import pujasamanRouter from "./router/pujasamanRouter.js";
import adminRouter from './router/adminRouter.js';

dotenv.config();

const port = process.env.PORT;
const database = process.env.DATABASE_URL;
const dbcon = await dbconection(database);

//cors policy

app.use(cors());
app.use(express.json());
;
app.use(express.static(join(process.cwd(), "public")));
app.use("/jyotish", express.static(join(process.cwd(), "public")));
app.use("jyotish/add", express.static(join(process.cwd(), "public")));
app.use("jyotish/edit", express.static(join(process.cwd(), "public")));
app.use("jyotish/show", express.static(join(process.cwd(), "public")));
app.use("/pujasaman", express.static(join(process.cwd(), "public")));
app.use("pujasaman/show", express.static(join(process.cwd(), "public")));
app.use("pujasaman/edit", express.static(join(process.cwd(), "public")));


app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

// router set

app.use("/api/user", router);
app.use("/admin", adminRouter);
app.use("/jyotish", jyotishRouter);
app.use("/pujasaman", pujasamanRouter);

app.listen(port, () => {
  console.log(`sever run at http://localhost:${port}`);
});
