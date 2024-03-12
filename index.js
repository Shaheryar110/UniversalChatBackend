const express = require("express");
const app = express();
const user = require("./routes/userRoutes");
const cors = require("cors");
const port = 5000;
var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(express.json());
app.use("/api", cors(corsOptions), user);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
