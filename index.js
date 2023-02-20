const express = require("express");

const app = express();
app.use(()=> {
    console.log("Helo server")
})

app.listen(4000);
