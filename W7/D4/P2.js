//Setting  and reading cookies
const express = require("express");
const cookiParser = require("cookie-parser");
const app = express();
//cookie-parser reads the cookie request header and  places the parsed value req.cookies
app.use(cookiParser());
app.get("/set-language",function(req,res){
    res.cookie("language","english",{
        maxAge:60*60*1000
    });
    res.send("Language cookie set to 'english' ")
});
app.get("/read-language",function(req,res){
    const language = req.cookies.language;
    res.json({
        message:"Cookie read from request.",
        language:language||"No language cookie found"
    }); 
});
app.listen(4000,function(){
    console.log("JWT demo server running @ http://localhost:4000");
});