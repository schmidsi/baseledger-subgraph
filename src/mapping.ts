import {
  Deposit as DepositEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Withdraw as WithdrawEvent,
} from "../generated/Staking/Staking";
import { Account, Deposit, Withdraw } from "../generated/schema";
import { Address, BigInt } from "@graphprotocol/graph-ts";

function getOrCreateAccount(address: Address): Account {
  let account = Account.load(address.toHexString());
  if (account == null) {
    account = new Account(address.toHexString());
    account.staked = BigInt.fromI32(0);
    account.save();
  }
  return account as Account;
}

export function handleDeposit(event: DepositEvent): void {
  let entity = new Deposit(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );
  let beneficiary = getOrCreateAccount(event.params.beneficiary);
  beneficiary.staked = beneficiary.staked.plus(event.params.amount);
  beneficiary.save();

  entity.sender = getOrCreateAccount(event.params.addr).id;
  entity.beneficiary = beneficiary.id;
  entity.validator = event.params.validator;
  entity.amount = event.params.amount;
  entity.save();
}

export function handleWithdraw(event: WithdrawEvent): void {
  let entity = new Withdraw(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );

  let beneficiary = getOrCreateAccount(event.params.addr);
  beneficiary.staked = beneficiary.staked.minus(event.params.amount);
  beneficiary.save();

  entity.beneficiary = beneficiary.id;
  entity.sender = beneficiary.id; // For the sake of similarity
  entity.validator = event.params.validator;
  entity.amount = event.params.amount;
  entity.save();
}
