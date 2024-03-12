const { translate } = require("free-translate");

const create = async (req, res) => {
  const { lng, text } = req.body;

  const translatedText = await translate(text, { to: lng });

  res.status(200).json(translatedText);
};

module.exports = { create };
