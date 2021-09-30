
Contract to index: https://ropsten.etherscan.io/address/0x0B5FC75192F8EE3B4795AB44b3B455aB3d97A6dF#code

## Step by step

### Prerquisites

```
yarn global add @graphprotocol/graph-cli
```

### Intialize

```
graph init --product hosted-service \
    --from-contract 0x0B5FC75192F8EE3B4795AB44b3B455aB3d97A6dF \
    --network ropsten \
    --index-events \
    --contract-name Staking
```

Note: `--index-events` will already create boilerplate code that simply indexes events. This is already very helpful.

Note: There is also a `--abi <path/to/abi.json>` option that can be used to specify the ABI of the contract. This is especially helpful if you write your contracts by yourself. More parameters here: `graph init --help`.

### Look through the repo

- [schema.graphql](./schema.graphql)
- [subgraph.yaml](./subgraph.yaml)
- [src/mapping.ts](./src/mapping.ts)

### Add startBlock to subgraph manifest (optional)

- Find contract creation transaction: https://ropsten.etherscan.io/address/0x0B5FC75192F8EE3B4795AB44b3B455aB3d97A6dF#code
- -> https://ropsten.etherscan.io/tx/0x6e525e4b1c50c446f0cfccdfd80cf7f52b2695434ff122f7d517c66afeeba21a
- Get block: 10920339

```
dataSources:
  - kind: ethereum/contract
    name: Staking
    network: ropsten
    source:
      address: "0x0B5FC75192F8EE3B4795AB44b3B455aB3d97A6dF"
      abi: Staking
      startBlock: 10920339
```

### Deploy boilerplate

To have a first quickwin, we will deploy the boilerplate.

```
graph auth --product hosted-service <ACCESS_TOKEN>
```

### Add Solidty file to project

This is not necessary, but it is a good practice to have the solidity file in your project.

## Further reading

https://github.com/dabit3/building-a-subgraph-workshop
https://thegraph.com/docs/developer/quick-start
https://thegraph.com/discord
