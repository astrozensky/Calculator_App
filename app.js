const express = require("express"),
      app = express();

app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

// Route
app.get("/", function(req, res){
    res.render("index");
});

// Server Listen
const port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log("Server started on " + port);
});