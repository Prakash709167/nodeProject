const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// routing
// app.get(path , callback)
app.get("/",(req,res)=> {
    res.send("Hii I am awesome")
})

// server create
app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
})