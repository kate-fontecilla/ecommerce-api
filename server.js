import cors from 'cors'
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import errorHandler from './middleware/errorHandler.js';

dotenv.config()

// Connect to database
connectDB()

const PORT = process.env.PORT;
const app = express();

app.use( cors() );
app.use( express.json() ); // Parse JSON request bodies

app.get( '/', ( req, res ) => { res.json( { message: 'E-commerce API is running' } ); } );
app.use( '/api/products', productRoutes )

app.use( errorHandler );

app.listen( PORT, () => {
    console.log( `Server running on PORT ${ PORT }` )
} )