import express from "express";
import ejs from 'ejs';
import bodyParser from "body-parser";




const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));



app.get("/", (req, res)=>{
    res.render("index.ejs");
});

app.get("/compose", (req,res)=>{
    res.render("compose.ejs");
});


app.get("/contact", (req, res)=>{
    res.render("contact.ejs");
});


app.get("/about", (req, res)=>{
    res.render("about.ejs");
});



app.post("/publish", (req,res)=>{
    
    // console.log(req.body.title);
    // console.log(req.body.post);
     res.render("index.ejs",{
        titu : req.body.title,
        pitu : req.body.post,
     })
});



app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`);
});

