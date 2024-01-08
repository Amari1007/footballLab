import mongoose, {Mongoose, mongo} from "mongoose";
import express from 'express'
import ejs from 'ejs';
import apiRoute from "./routes/apis";
import route from './routes/screens';
import dotenv from 'dotenv';

const app = express();
const PORT = 3333;

dotenv.config()

mongoose.connect(process.env.MONGODB_URL,  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
.catch(err => {
    console.log(`A Fatal error occured: ${err}`);
})

app.use(express.static("public"));
// Configure ejs as the view engine
app.set('view engine', 'ejs');
app.set('views', './public/screens/');

// Log requests
app.use((req, res, next)=>{
    const date = new Date();
    console.log(`request made at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
    next();
});

// Screen routes in (public/screens)
const screenRoutes = route;
app.use("/i", screenRoutes);

// Api routes in apis.js
const apiRoutes = apiRoute;
app.use("/api", apiRoutes);

// Test route
app.get("/app/test", (req, res) => {
    res.json({message:"success", success: true});
});

// 404 ERROR
app.use((req, res, next) => {
    res.status(404).render("404");
    next();
});

app.listen(PORT, () => {
    console.log("football lab back on port:", PORT)
});
