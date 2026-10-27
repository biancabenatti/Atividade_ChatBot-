const express = require("express");
const { getReply } = require("./chatbot");

const app = express();
app.use(express.json());
app.use(express.static(__dirname));

app.post("/chat", (req, res) => {
  const { message } = req.body ?? {};

  if (typeof message !== "string" || message.trim() === "") {
    return res.status(400).json({ error: "Envie uma mensagem não vazia." });
  }

  return res.json({ reply: getReply(message) });
});

const port = Number(process.env.PORT) || 3000;
app.listen(port, () => console.log(`Chatbot baseado em regras em http://localhost:${port}`));

module.exports = app;
