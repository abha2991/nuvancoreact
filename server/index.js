const express = require("express");

const app = express();
var cors = require("cors");
var cookies = require("cookie-parser");

const port = process.env.PORT || 8001;
staticServe = express.static(`${__dirname}/uploads/ProfileImage`);
staticServe1 = express.static(`${__dirname}/uploads/AdditionalRequirements`);
require("./db/conn");

app.use(cors({ origin: true, credentials: true }));
app.use(cookies());

app.use(require("./router/routes"));
app.use("/uploads/ProfileImage", staticServe);
app.use("/uploads/AdditionalRequirements", staticServe1);

app.listen(port, () => {
  console.log("Server is running at port no " + port);
});
