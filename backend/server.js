const express = require("express");
const dotenv = require("dotenv");
const logger = require("pino")();
const mongoose = require("mongoose");
mongoose.set('strictQuery', true)
const cors = require("cors");
const expressSession = require("express-session");

//Import Routes to here
const AddProductsRoutes = require("./routes/AddProductsRoutes");
const RegRestaurantRoutes = require("./routes/RegRestaurantRoutes");
const OrderPaymentRoutes = require("./routes/OrderPaymentRoutes");
const UserRoutes = require("./routes/UserRoutes");
const DonatorRoutes = require("./routes/DonatorRoutes");
const OrganRoutes = require("./routes/OrganRoutes");
const ExhangeItemRouts = require("./routes/ExchangeItemRoutes");
const SelfEmployeeRoutes = require("./routes/SelfEmployeeRoutes");

const app = express();
dotenv.config();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.set("trust proxy", 1);
const sessSettings = expressSession({
  path: "/",
  secret: "oursecret",
  resave: true,
  saveUninitialized: true,
  cookie: {
    sameSite: false,
    secure: false,
    maxAge: 360000,
  },
});

app.use(sessSettings);
const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.DB_URL, {
  useNewUrlParser: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  logger.info(" Mongodb connected successfully");
});

app.get("/", (req, res) => {
  res.status(200).json({ messsage: "Server is running!" });
});

// Implement the routes from here
app.use("/api/AddProducts", require("./routes/AddProductsRoutes"));
app.use("/api/RegRestaurant", require("./routes/RegRestaurantRoutes"));
app.use("/api/OrderPayments", require("./routes/OrderPaymentRoutes"));
app.use("/api/Users", require("./routes/UserRoutes"));
app.use("/api/AddDonator", require("./routes/DonatorRoutes"));
app.use("/api/AddOrgan", require("./routes/OrganRoutes"));
app.use("/api/AddEmployee", require("./routes/SelfEmployeeRoutes"));
app.use("/api/AddExchangeItem", require("./routes/ExchangeItemRoutes"));

app.listen(PORT, () => {
    logger.info(`Server is running on PORT: ${PORT}`);
  });