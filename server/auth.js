require("dotenv").config;

const server_api_key = process.env.SERVER_API_KEY;

const authenticateKey = (req, res, next) => {
  let apiKey = req.header("x-api-key");
  if (apiKey === server_api_key) {
    next();
  } else {
    res.status(403).send({ error: { code: 403, message: "Not allowed!" } });
  }
};

module.exports = { authenticateKey };
