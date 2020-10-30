//Connection to Mondo Db using mongoose

const mongoose = require('mongoose');

//mongodb+srv://dbUser:<dbUser>@cluster0.sij8e.mongodb.net/<userDetails>?retryWrites=true&w=majority
const URI = "mongodb+srv://dbUser:dbUser@cluster0.sij8e.mongodb.net/userDetails?retryWrites=true&w=majority";


const connectDb = () => {
    mongoose.connect(URI, { useUnifiedTopology: true, useNewUrlParser: true })
        .then(() => {
            console.log('successfull DB Connection ')
        }
        ).catch((error) => {
            console.log('Unable to connect to Mongo Db')
            console.log(error)
        })

}

module.exports = connectDb;