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

# ou
# iniciando serviço 0x, monitoração de gargalo, otimização...
npm run flame-0x

# em seguida autocannon
npm test
```

```sh
# em segundo execute o climem para monitorar o consumo de memória
npm run climem

# e terceiro e por último execute autocannon, irá realizar teste de carga/requisições
npm test
```