// const express = require('express')
// const dotenv=require('dotenv')  //***that is old form */

import express from 'express'
import dotenv from 'dotenv'
// import { dirname } from 'path'
const app = express()

dotenv.config();
const PORT = process.env.port || 4000;

app.get('/', (req, res) => {
  res.send('Hello !')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})