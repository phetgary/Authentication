var express                 = require("express"),
    mongoose                = require("mongoose"),
    passport                = require("passport"),
    bodyparser              = require("body-parser"),
    User                    = require("./models/user"),
    LocalStrategy           = require("passport-local"),
    passportLocalMongoose   = require("passport-local-mongoose");

mongoose.connect("mongodb://localhost/auth_demo_app");


var app = express();
app.set("view engine", "ejs");

app.use(require("express-session")({
    secret: "Dodo is the best and cutest dog in the world",
    resvae: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/", function(req, res){
    res.render("home");
});

app.get("/secret", function(req, res){
    res.render("secret");
});

app.listen(3000, function(){
    console.log("Server is running!!!")
});