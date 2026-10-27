function normalize(message) {
  return message
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

const rules = [
  {
    pattern: /\b(horario|horarios|aberto|aberta|abre|fechamento|fecha|funciona)\b/,
    reply: "Nosso atendimento funciona de segunda a sexta, das 9h às 18h (horário de demonstração).",
  },
  {
    pattern: /\b(onde|endereco|localizacao|local|chegar)\b/,
    reply: "Este é um atendimento online. Para consultar entrega na sua região, informe seu CEP.",
  },
  {
    pattern: /\b(promocao|promocoes|desconto|cupom|oferta|ofertas)\b/,
    reply: "Consulte as ofertas disponíveis na página inicial e verifique as condições de cada cupom.",
  },
  {
    pattern: /\b(login|senha|acessar|acesso)\b/,
    reply: "Você pode redefinir sua senha clicando em 'Esqueci minha senha'.",
  },
  {
    pattern: /\b(plano|planos)\b/,
    reply: "Temos planos Básico e Premium. Qual você gostaria de conhecer?",
  },
  {
    pattern: /\b(atendente|pessoa|humano)\b/,
    reply: "Informe seu e-mail para que nossa equipe possa entrar em contato.",
  },
];

function getReply(message) {
  const normalizedMessage = normalize(message);
  const matchingRule = rules.find(({ pattern }) => pattern.test(normalizedMessage));
  return matchingRule?.reply ?? "Desculpe, não entendi sua pergunta. Você pode perguntar sobre horário, localização ou promoções.";
}

module.exports = { getReply, normalize };
