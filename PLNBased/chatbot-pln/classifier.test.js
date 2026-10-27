const test = require("node:test");
const assert = require("node:assert/strict");
const { createClassifier, intents } = require("./classifier");

const classifier = createClassifier();

test("classifica novas intenções com frases diferentes das usadas no treino", () => {
  assert.equal(classifier.classify("Quanto vou pagar por isso?"), "preco");
  assert.equal(classifier.classify("Você pode dar uma força?"), "ajuda");
  assert.equal(classifier.classify("Gostaria de encerrar a assinatura"), "cancelamento");
});

test("mantém as intenções originais de saudação, pedido e agradecimento", () => {
  assert.equal(classifier.classify("Boa tarde"), "saudacao");
  assert.equal(classifier.classify("Quero rastrear minha encomenda"), "pedido_status");
  assert.equal(classifier.classify("Muito obrigado"), "agradecimento");
});

test("os exemplos de treino estão definidos para cada intenção", () => {
  assert.deepEqual(Object.keys(intents), [
    "saudacao",
    "pedido_status",
    "agradecimento",
    "preco",
    "ajuda",
    "cancelamento"
  ]);
});
