const express = require("express");
const { createClassifier, normalize } = require("./classifier");

const app = express();
const classifier = createClassifier();

app.use(express.json());
app.use(express.static(__dirname));

app.post("/chat", (req, res) => {
  const { message } = req.body ?? {};

  if (typeof message !== "string" || message.trim() === "") {
    return res.status(400).json({ error: "Envie uma mensagem não vazia." });
  }

  const intent = classifier.classify(normalize(message));
  const replies = {
    saudacao: "Olá! Em que posso ajudar hoje?",
    pedido_status: "Para consultar seu pedido, informe o número ou o e-mail usado na compra.",
    agradecimento: "De nada! Estou à disposição.",
    preco: "Posso ajudar com preços. Diga o nome do produto ou plano que deseja consultar.",
    ajuda: "Claro! Conte um pouco mais sobre o que você precisa para eu direcionar sua dúvida.",
    cancelamento: "Posso orientar o cancelamento. Informe se é um pedido ou uma assinatura."
  };

  return res.json({ intent, reply: replies[intent] ?? "Desculpe, não entendi. Pode reformular sua pergunta?" });
});

const port = Number(process.env.PORT) || 3001;
app.listen(port, () => console.log(`Chatbot com PLN em http://localhost:${port}`));

module.exports = app;
