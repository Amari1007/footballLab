import express from 'express'
import ejs from 'ejs';
import route from './routes/screens';
import dotenv from 'dotenv';

const app = express();
const PORT = 3333;

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
