const express = require("express");
const app = express()
app.use(express.json());
const cors = require("cors");
const { connectDB } = require("./config/db");
app.use(cors());
const UploadRoute = require("./routes/upload.routes");
const ProductRoute = require("./routes/product.routes");

connectDB();

app.use("/", UploadRoute)
app.use("/product", ProductRoute)


app.listen(3000, () => console.log("Server runing 3000 port"))