import express from "express";
import bodyParser from "body-parser";

import userRouter from "./routes/users.js";

const app = express();
const PORT = process.env.PORT || 3000; 

const logger = (req, res, next) => {
    console.log("Routing to ", req.originalUrl);

    next();

};

//middlewares
app.use(bodyParser.json());
app.use(logger);

//Routes
app.get('/', (req, res) => {
    res.status(200).send("Hello Ghazi!");
});
app.use('/users', userRouter)

// Init Server 
app.listen(PORT, () => {
    console.log('Server is runnnig on: ', PORT);
});