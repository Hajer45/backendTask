const express = require('express')
const app = express()
//DB connection
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://hajer:Szzfapq75AdmwwJ1@cluster0.9nbfl.mongodb.net/?retryWrites=true&w=majority');
mongoose.connection.on("connected",() => {
    console.log("DB connected")
})
mongoose.connection.on("error",(err) => {
    console.log("mongodb failed with",err)
})
//import routes
const bookRoutes = require("./routes/book.routes")
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//routes
app.use("/books", bookRoutes);
const port = 8000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})