# memory-leak-example
Example of memory leak in **Node.js**

## Project Setup
Clone the repository:
```sh
git@github.com:anopszetex/memory-leak-example.git
```

Make it your current working directory:
```sh
cd memory-leak-example
```

Install dependencies:
```sh
npm i
```

## To start the app
### Starting service with 0x 
```sh
# discover the bottlenecks and hot paths in your code, with flamegraphs
npm run flame-0x
```

### In sequence autocannon
```sh
# in sequence autocannon
npm test
```

or

```sh
npm start

# in second execute the climem to monitoring the consume of memory
npm run climem

# and for last, execute autocannon, will perform test of load/requests
npm test
```
