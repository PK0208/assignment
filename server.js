const express = require('express');
const app = express();

const connectDb = require('./DB/Connection');
connectDb();

//const User = require('./models/users');

const userRoutes = require('./routes/routes');
const authRoutes = require('./routes/auth');


app.use(express.json({ extended: false }))

app.use('/api', userRoutes);
app.use('/api/auth', authRoutes);


const Port = process.env.Port || 3000;

app.listen(Port, () => console.log('Server Started on Port', Port));

