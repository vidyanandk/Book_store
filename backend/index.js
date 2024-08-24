// const express = require('express')
// const dotenv=require('dotenv')  //***that is old form */

// import { dirname } from 'path'
import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

import bookRoute from './route/book.route.js'
import userRoute from './route/user.route.js'

const app = express()
app.use(cors())
// Middleware to parse JSON bodies
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const MongoURI=process.env.MONGO_URI;

// Check if the MongoDB URI is defined
if (!MongoURI) {
    console.error('Error: MONGO_URI is not defined in the environment variables.');
    process.exit(1); // Exit the process with a failure code
  }



// Function to connect to MongoDB
async function connectToMongoDB() {
    try {
      await mongoose.connect(MongoURI); // Defaults to using new parser and unified topology
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Could not connect to MongoDB', error);
      process.exit(1); // Exit the process with a failure code
    }
  }
  
  // Start server and connect to MongoDB
  connectToMongoDB();

// defining the routes
app.use('/book',bookRoute);
app.use('/user',userRoute);



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})