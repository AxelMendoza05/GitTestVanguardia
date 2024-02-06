const mongoose = require('mongoose');
const loadData = require('../db-scripts/base-data');

module.exports = async function db({ test = false }) {
  try {
    // Cambia la URL de conexión a tu base de datos MongoDB
    const uri = process.env.MONGO_DB;

    // Conéctate a la base de datos MongoDB
    await mongoose.connect(uri, {});
    console.log('« Connected to MongoDB. Loading base data... »');

    if (!test) {
      console.log('« ...Loading base data... »');
      // Descomenta esta línea cuando quieras cargar datos en tu base de datos
      // await loadData();
      console.log('« Base data loaded to MongoDB! »');
    }
  } catch (e) {
    console.error('Error connecting to MongoDB:', e);
    throw e;
  }
};
