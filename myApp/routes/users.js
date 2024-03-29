var express = require("express");
var router = express.Router();
var axios = require("axios");

//MODELO VISTA CONTROLADOR

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("WEATHER_API: " + process.env.WEATHER_API);
});

router.get("/getApi", async function (req, res, next) {
  try {
    const response = await axios.get(
      "https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=" +
        process.env.WEATHER_API
    );
    res.send(response.data);
  } catch (error) {
    console.error("Error al hacer la solicitud con Axios:", error.message);
    res.status(500).send("Error interno del servidor");
  }
});


module.exports = router;
