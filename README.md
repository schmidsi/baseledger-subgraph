
Contract to index: https://ropsten.etherscan.io/address/0x0B5FC75192F8EE3B4795AB44b3B455aB3d97A6dF#code

## Prerquisites

```
yarn global add @graphprotocol/graph-cli
```

## Intialize

```
graph init --product hosted-service \
    --from-contract 0x0B5FC75192F8EE3B4795AB44b3B455aB3d97A6dF \
    --network ropsten \
    --index-events \
    --contract-name Staking
```

Note: `--index-events` will already create boilerplate code that simply indexes events. This is already very helpful.

Note: There is also a `--abi <path/to/abi.json>` option that can be used to specify the ABI of the contract. This is especially helpful if you write your contracts by yourself. More parameters here: `graph init --help`.

## Deploy boilerplate

To have a first quickwin, we will deploy the boilerplate.

```
graph auth --product hosted-service <ACCESS_TOKEN>
```

## Further reading

https://github.com/dabit3/building-a-subgraph-workshop