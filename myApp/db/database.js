const mongoose = require('mongoose');
const loadData = require('../db-scripts/base-data');
require("dotenv").config();

module.exports = async function Mongodb_Connection({ test = false }) {
  try {
    
    const uri = `mongodb+srv://axelmendoza0501:${process.env.MONGO_PASSWORD}@cluster0.istvn3u.mongodb.net/${'Vanguardia'}?retryWrites=true&w=majority`;
    
    console.log(uri);

    await mongoose.connect(uri);
    console.log('« Connected to MongoDB. Loading base data... »');

  } catch (e) {
    console.error('Error connecting to MongoDB:', e);
    throw e;
  }
};
