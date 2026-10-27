const test = require("node:test");
const assert = require("node:assert/strict");
const { getReply } = require("./chatbot");

test("responde às novas regras de horário, localização e promoções", () => {
  assert.match(getReply("Qual é o horário de vocês?"), /segunda a sexta/);
  assert.match(getReply("Onde fica a loja?"), /atendimento online/);
  assert.match(getReply("Tem alguma promoção?"), /ofertas disponíveis/);
});

test("mantém as regras existentes de login e planos", () => {
  assert.match(getReply("Esqueci minha senha"), /redefinir sua senha/);
  assert.match(getReply("Quais planos existem?"), /Básico e Premium/);
});

test("usa a resposta padrão quando nenhuma regra corresponde", () => {
  assert.match(getReply("Conte uma curiosidade"), /não entendi/);
});
