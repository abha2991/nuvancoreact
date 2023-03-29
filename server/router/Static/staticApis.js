const connection = require("../../db/conn");
module.exports.getCountry = async (req, res) => {
  connection.query(
    "Select * FROM country_master",
    function (error, results, fields) {
      if (error) throw error;

      return res.status(200).json({
        status: "success",
        data: results,
        message: "Fetch Successfully",
      });
    }
  );
};

module.exports.getState = async (req, res) => {
  const { countryId } = req.body;
  connection.query(
    "Select * FROM state_master WHERE state_countryid=?",
    [countryId],
    function (error, results, fields) {
      if (error) throw error;

      return res.status(200).json({
        status: "success",
        data: results,
        message: "Fetch Successfully",
      });
    }
  );
};

module.exports.getCity = async (req, res) => {
  const { stateId } = req.body;
  connection.query(
    "Select * FROM city_master WHERE city_stateid=?",
    [stateId],
    function (error, results, fields) {
      if (error) throw error;

      return res.status(200).json({
        status: "success",
        data: results,
        message: "Fetch Successfully",
      });
    }
  );
};
