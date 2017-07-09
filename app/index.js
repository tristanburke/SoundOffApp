var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "html");

app.get("/", function (req, res) {
    res.render("index.html");
});

app.post("/", function (req, res) {
    var article = req.body.article;
    res.send(article);
});

app.listen(3000, () => console.log("server has started!"));