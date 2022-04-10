# memory-leak-example
Exemplo de memory leak

## Serviço
Clonando projeto:
```sh
https://github.com/anopszetex/memory-leak-example.git
```

Pasta destino:
```sh
cd memory-leak-example
```

Instalando dependencias:
```sh
npm install
```
#### Iniciando o serviço:
```sh
npm start
```

```sh
# em segundo execute o climem para monitorar o consumo de memória
npm run climem

# em terceiro e por último execute autocannon, irá realizar teste de carga/requisições
npm test
```