const natural = require("natural");
const intents = require("./intents.json");

function normalize(message) {
  return message
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function createClassifier() {
  const classifier = new natural.BayesClassifier();

  for (const [intent, examples] of Object.entries(intents)) {
    for (const example of examples) {
      classifier.addDocument(normalize(example), intent);
    }
  }

  classifier.train();
  return classifier;
}

function classifyMessage(message) {
  return createClassifier().classify(normalize(message));
}

module.exports = { createClassifier, classifyMessage, normalize, intents };
