const { createClassifier, intents } = require("./classifier");

createClassifier();
const examplesCount = Object.values(intents).reduce((total, examples) => total + examples.length, 0);
console.log(`Classificador Bayesiano treinado com ${examplesCount} frases em ${Object.keys(intents).length} intenções.`);
console.log(`Intenções: ${Object.keys(intents).join(", ")}`);
