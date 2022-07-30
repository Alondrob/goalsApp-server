const express = require('express');
const dotnev = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware') 
const port = process.env.PORT || 5000;

const app = express();

//he add few lines of middleware, need to understand all about it
app.use(express.json());
app.use(express.urlencoded({extended: false}))
// console.log(app)
app.use('/api/goals', require('./routes/goalRoutes'))


app.listen(port, () => console.log(`Server is running on port: ${port}`));