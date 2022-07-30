const express = require('express');
const dotnev = require('dotenv').config()
const port = process.env.PORT || 5000;

const app = express();

// console.log(app)
app.use('/api/goals', require('./routes/goalRoutes'))


app.listen(port, () => console.log(`Server is running on port: ${port}`));