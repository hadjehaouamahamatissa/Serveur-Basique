const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const router = express.Router();
const productsRouter = require('./productRoutes');  //chemin vers le route



// Initialisation du port
const port = process.env.port || 3000;

dotenv.config();
const app = express();

// Middleward
app.use(express.json());

// Routes 
app.use('/products', productsRouter); // activation de la route /products

// Mongodb Connection 
mongoose.connect(process.env.MONGO_URI, {

})
    .then(() => {console.log('Connection in MongoDB successfully')})
    .catch((err) => {console.error('Error MongoDB', err)});


app.listen(port, () => {
    console.log(`Serveur lance sur le port ${port}`);
    
})

