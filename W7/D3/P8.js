//JWT flow with login, refresh-style logic and secure verification
const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());
const secretKey = "MysecretKey";
const refreshSecretKey = "MyNewsecretKey";

//in-memory storage for refresh token
const refreshTokens = [];
function authenticateAccessToken(req,res,next){
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];
    if(!token){
         return res.status(401).json({
            success:false,
            message:"Bearer token is missing"
        });
    }
    try{
        req.user = jwt.verify(token,secretKey,{
            algorithms:["HS256"],
            issuer:"jwt-example"
        });
        next();
    }
    catch(error){
        if(error.name === "TokenExpiredError"){
            return res.status(401).json({
                success:false,
                message:"Access token has expired"
            });
        }
        return res.status(401).json({
            success:false,
            message:"Access token is invalid"
        });
    }
}
app.post("/login",function(req,res){ 
    //curl -X POST http://localhost:4000/login -H "Content-Type:application/json" 
    // -d "{\"email\":\"email@email.com\",\"password\":\"pass@123\"}" 
    const {email,password} = req.body;
    if(email!=="email@email.com" || password!=="pass@123"){
        return res.status(401).json({
            success:false,
            message:"Invalid credentials"
        });
    }
    const accessToken = jwt.sign({
        userId:101,
        email:email,
        role:"member"
    },secretKey,{expiresIn:"1h",algorithm:"HS256",issuer:"jwt-example"}
);
    const refreshToken = jwt.sign({
        userId:101,
        email:email
    },refreshSecretKey,{expiresIn:"10d",//d:days,m:minutes,h:hours
        algorithm:"HS256",issuer:"jwt-example"}
);
refreshTokens.push(refreshToken);
res.json({
    success:true,
    message:"login successfull",
    accessToken:accessToken,
    refreshToken:refreshToken
});
});

app.post("/refresh",function(req,res){
    //curl -X POST http://localhost:4000/refresh -H "Content-Type:application/json" -d 
    // "{\"refreshToken\":\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEwMSwiZW1haWwiOiJlbWFpbEBlbWF
    // pbC5jb20iLCJpYXQiOjE3NzUxMTM4MDgsImV4cCI6MTc3NTk3NzgwOCwiaXNzIjoiand0LWV4YW1wbGUifQ.
    // i6jgoXp81_nQbqciThA6QnCtZCKQ-OaTtF-afdzBVqc\"}"
    const {refreshToken} = req.body;
    if(!refreshToken || !refreshTokens.includes(refreshToken)){
        return res.status(401).json({
            success:false,
            message:"Refresh token is missing or invalid"
        });
    }
    try{
        const decoded = jwt.verify(refreshToken,refreshSecretKey,{
            algorithms:["HS256"],issuer:"jwt-example"
        });
        const newAccessToken = jwt.sign({
            userId:decoded.userId,
            email:decoded.email,
            role:"member"
        },secretKey,{
            expiresIn:"45m",algorithm:"HS256",issuer:"jwt-example"
        });
        res.json({
            success:true,
            accessToken:newAccessToken
        });
    }
    catch(error){
        res.status(403).json({
            success:false,
            message:"Refresh token verification failed."
        });
    }
});
app.get("/me",authenticateAccessToken,function(req,res){
    //curl http://localhost:4000/me -H "Authorization:Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.
    // eyJ1c2VySWQiOjEwMSwiZW1haWwiOiJlbWFpbEBlbWFpbC5jb20iLCJyb2xlIjoibWVtYmVyIiwiaWF0IjoxNzc1MTEzODU1LCJleHAiOjE3NzUxMTQ3NTUsImlzcyI6Imp3dC1leGFtcGxlIn0.
    // R2mQMipE65brdqtkBQu90c8nlBpssBkNMDQXtpHIZRg"
    res.json({
        success:true,
        message:"Protected user route",
        user:req.user
    });
});

app.listen(4000,function(){
    console.log("JWT demo server running @ http://localhost:4000");
});