<details>
<summary><strong>🇧🇷 Ver documentação em Português (Brasil)</strong></summary>

# memory-leak-example

Exemplo controlado para reproduzir, diagnosticar e comparar um vazamento de memória no Node.js com um endpoint seguro.

## Como funciona

- `/leak` cria um intervalo que retém um array crescente a cada requisição.
- `/safe` realiza uma alocação temporária semelhante sem manter referências.
- `autocannon` gera carga, `climem` acompanha a memória e `0x` produz um flamegraph.

## Executando o experimento

```sh
npm ci
npm run start:monitor
```

Em terminais separados, monitore o processo e compare as duas rotas:

```sh
npm run climem
npm run load:safe
npm run load:leak
```

Para gerar um flamegraph:

```sh
npm run flame-0x
```

O endpoint seguro também possui um smoke test automatizado:

```sh
npm test
```

O caminho com vazamento existe intencionalmente para fins educacionais e não deve ser usado em produção.

## Licença

[MIT](LICENSE)

</details>

# memory-leak-example

---

A controlled Node.js example for reproducing, diagnosing, and comparing a memory leak with a safe endpoint.

## How it works

- `/leak` creates an interval that retains an ever-growing array for every request.
- `/safe` performs comparable temporary allocation without retaining references.
- `autocannon` generates load, `climem` tracks memory, and `0x` produces a flamegraph.

## Run the experiment

```sh
npm ci
npm run start:monitor
```

In separate terminals, monitor the process and compare both routes:

```sh
npm run climem
npm run load:safe
npm run load:leak
```

Generate a flamegraph with:

```sh
npm run flame-0x
```

The safe route is also covered by an automated smoke test:

```sh
npm test
```

This repository intentionally contains a leaking code path for educational use. Do not copy that handler into production code.

## License

[MIT](LICENSE)
