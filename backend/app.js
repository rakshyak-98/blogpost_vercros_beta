const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const routes = require("./routes");

dotenv.config();
const app = express();
mongoose.connect(process.env.MONGO_URI);

app.use(bodyParser.json());
app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use("/api", routes);

app.listen(process.env.PORT, () => {
	console.log(`Express Server running on port ${process.env.PORT}`);
});

