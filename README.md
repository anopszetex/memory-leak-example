# memory-leak-example

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

---

<details>
<summary><strong>🇧🇷 Ver documentação em Português (Brasil)</strong></summary>

# memory-leak-example

Exemplo prático de **vazamento de memória em Node.js** e como diagnosticá-lo com ferramentas de profiling.

Este repositório contém um servidor HTTP propositalmente problemático. O objetivo é mostrar como identificar o leak, entender a causa e aplicar a correção.

## O que causa o vazamento

O servidor emite um evento a cada requisição. O listener do evento:

- cria um `setInterval` que nunca é limpo;
- acumula dados em um array a cada intervalo;
- mantém referências vivas impedindo o garbage collector de atuar.

Com o tempo, cada requisição adiciona mais listeners ativos e mais memória retida, resultando em crescimento contínuo do heap.

## Ferramentas utilizadas

- **[0x](https://github.com/davidmarkclements/0x)** — gera flamegraphs para identificar hot paths e funções que consomem tempo/memória.
- **[climem](https://github.com/naugtur/climem)** — monitora o consumo de memória do processo em tempo real.
- **[autocannon](https://github.com/mcollina/autocannon)** — gera carga de requisições para acelerar a manifestação do leak.

## Como rodar

### Instalar dependências

```sh
npm install
```

### 1. Subir o servidor com `climem`

```sh
npm start
```

Em outro terminal, monitore a memória:

```sh
npm run climem
```

### 2. Gerar carga

```sh
npm test
```

Isso executa o `autocannon` contra `http://localhost:3000`.

### 3. Gerar flamegraph com `0x`

```sh
npm run flame-0x
```

Depois gere carga novamente com `npm test` e analise o flamegraph gerado.

## O que observar

- O uso de memória sobe continuamente durante o teste de carga.
- O flamegraph mostra funções relacionadas a `setInterval` e retenção de arrays.
- O número de listeners ativos cresce a cada requisição.

## Como corrigir

A correção envolve:

1. **Limpar o intervalo** quando não for mais necessário (`clearInterval`).
2. **Evitar reter dados** em arrays que crescem indefinidamente.
3. **Remover listeners** do `EventEmitter` quando a requisição termina, ou usar `once` quando apropriado.
4. **Limitar o escopo dos dados** criados por requisição para que fiquem elegíveis ao garbage collector.

## Licença

[MIT](LICENSE)

</details>
