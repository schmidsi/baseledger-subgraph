res = {
  data: {
    deposits: [
      {
        amount: "2500000000000",
        beneficiary: {
          id: "0xbee25e36774dc2baeb14342f1e821d5f765e2739",
        },
      },
      {
        amount: "2500000000000",
        beneficiary: {
          id: "0xbee25e36774dc2baeb14342f1e821d5f765e2739",
        },
      },
      {
        amount: "2500000000000",
        beneficiary: {
          id: "0xbee25e36774dc2baeb14342f1e821d5f765e2739",
        },
      },
      {
        amount: "2500000000000",
        beneficiary: {
          id: "0xbee25e36774dc2baeb14342f1e821d5f765e2739",
        },
      },
      {
        amount: "2500000000000",
        beneficiary: {
          id: "0xbee25e36774dc2baeb14342f1e821d5f765e2739",
        },
      },
      {
        amount: "2500000000000",
        beneficiary: {
          id: "0xbee25e36774dc2baeb14342f1e821d5f765e2739",
        },
      },
      {
        amount: "2500000000000",
        beneficiary: {
          id: "0xbee25e36774dc2baeb14342f1e821d5f765e2739",
        },
      },
      {
        amount: "2500000000000",
        beneficiary: {
          id: "0xbee25e36774dc2baeb14342f1e821d5f765e2739",
        },
      },
      {
        amount: "2500000000000",
        beneficiary: {
          id: "0xbee25e36774dc2baeb14342f1e821d5f765e2739",
        },
      },
      {
        amount: "2500000000000",
        beneficiary: {
          id: "0xbee25e36774dc2baeb14342f1e821d5f765e2739",
        },
      },
      {
        amount: "2500000000000",
        beneficiary: {
          id: "0xbee25e36774dc2baeb14342f1e821d5f765e2739",
        },
      },
      {
        amount: "2500000000000",
        beneficiary: {
          id: "0xbee25e36774dc2baeb14342f1e821d5f765e2739",
        },
      },
      {
        amount: "2500000000000",
        beneficiary: {
          id: "0xbee25e36774dc2baeb14342f1e821d5f765e2739",
        },
      },
      {
        amount: "2500000000000",
        beneficiary: {
          id: "0xbee25e36774dc2baeb14342f1e821d5f765e2739",
        },
      },
    ],
    withdraws: [
      {
        amount: "2500000000000",
        beneficiary: {
          id: "0xbee25e36774dc2baeb14342f1e821d5f765e2739",
        },
      },
      {
        amount: "2500000000000",
        beneficiary: {
          id: "0xbee25e36774dc2baeb14342f1e821d5f765e2739",
        },
      },
      {
        amount: "2500000000000",
        beneficiary: {
          id: "0xbee25e36774dc2baeb14342f1e821d5f765e2739",
        },
      },
      {
        amount: "1000000000000",
        beneficiary: {
          id: "0xbee25e36774dc2baeb14342f1e821d5f765e2739",
        },
      },
      {
        amount: "2500000000000",
        beneficiary: {
          id: "0xbee25e36774dc2baeb14342f1e821d5f765e2739",
        },
      },
      {
        amount: "2500000000000",
        beneficiary: {
          id: "0xbee25e36774dc2baeb14342f1e821d5f765e2739",
        },
      },
      {
        amount: "1500000000000",
        beneficiary: {
          id: "0xbee25e36774dc2baeb14342f1e821d5f765e2739",
        },
      },
      {
        amount: "2500000000000",
        beneficiary: {
          id: "0xbee25e36774dc2baeb14342f1e821d5f765e2739",
        },
      },
      {
        amount: "2500000000000",
        beneficiary: {
          id: "0xbee25e36774dc2baeb14342f1e821d5f765e2739",
        },
      },
      {
        amount: "2500000000000",
        beneficiary: {
          id: "0xbee25e36774dc2baeb14342f1e821d5f765e2739",
        },
      },
      {
        amount: "2500000000000",
        beneficiary: {
          id: "0xbee25e36774dc2baeb14342f1e821d5f765e2739",
        },
      },
      {
        amount: "10000000000000",
        beneficiary: {
          id: "0xbee25e36774dc2baeb14342f1e821d5f765e2739",
        },
      },
    ],
  },
};

deposited = res.data.deposits.reduce(
  (acc, curr) => acc + BigInt(curr.amount),
  0n
);
withdraw = res.data.withdraws.reduce(
  (acc, curr) => acc + BigInt(curr.amount),
  0n
);

console.log(deposited, withdraw);
