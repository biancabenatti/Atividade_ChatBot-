# Atividade: chatbots baseados em regras e PLN

Implementação individual a partir do repositório-base [jylaila/chat](https://github.com/jylaila/chat).

## Chatbot baseado em regras

O projeto está em `RulesBased/chatbot-node`. As perguntas são comparadas com regras por palavra-chave; foram adicionadas regras para horário de atendimento, localização e promoções, mantendo login, planos e atendimento humano. O horário e as respostas de exemplo devem ser ajustados aos dados reais do negócio.

```powershell
cd RulesBased\chatbot-node
npm install
npm start
```

Abra <http://localhost:3000> no navegador. Teste, por exemplo, “Qual é o horário?”, “Onde fica?” e “Tem alguma promoção?”. Execute `npm test` para verificar as regras.

## Chatbot baseado em PLN

O projeto está em `PLNBased/chatbot-pln`. O classificador Naive Bayes usa as frases de `intents.json`; foram incluídas as intenções `preco`, `ajuda` e `cancelamento`, além de saudação, status do pedido e agradecimento.

```powershell
cd PLNBased\chatbot-pln
npm install
npm run train
npm start
```

Abra <http://localhost:3001> no navegador e teste frases como “Quanto vou pagar por isso?”, “Você pode dar uma força?” e “Gostaria de encerrar a assinatura”. A resposta mostra a intenção identificada. Para adicionar exemplos ou intenções, edite `intents.json`, rode `npm run train` novamente e reinicie o servidor. Execute `npm test` para validar as classificações.

Os dois servidores podem rodar simultaneamente porque usam portas distintas (`3000` e `3001`); a variável de ambiente `PORT` permite alterá-las.
