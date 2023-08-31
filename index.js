const express = require("express");
const app = express();

const token = require("./token");
const validate = require("./validate")

app.get("/",token,validate,(req,res) => {
    res.send("<h1>Custom Middleware Created</h1>");
});

const PORT = process.env.PORT || 5001;
app.listen(PORT,()=>  console.log("Running....."));