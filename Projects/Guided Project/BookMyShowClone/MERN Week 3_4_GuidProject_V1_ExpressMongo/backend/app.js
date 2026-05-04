
const express = require("express");
const morgan = require("morgan");
const authRoutes = require("./src/routes/auth.routes");
const movieRoutes = require("./src/routes/movie.routes");
const bookingRoutes = require("./src/routes/booking.routes");
const showRoutes = require("./src/routes/show.routes");
const errorMiddleware = require("./src/middleware/error.middleware");
const app = express();
app.use(express.json());
app.use("/api/auth",authRoutes);
app.use("/api/movies",movieRoutes);
app.use("/api/bookings",bookingRoutes);
app.use("/api/shows",showRoutes);
app.use(morgan("dev"));
app.use(errorMiddleware);
//Base URL
app.get("/",(req,res)=>{
    res.status(200).json({
       success:true,
       message:"Movie booking API is running...."
    });
});


module.exports = app;