import {
  Deposit as DepositEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  Withdraw as WithdrawEvent
} from "../generated/Staking/Staking"
import { Deposit, OwnershipTransferred, Withdraw } from "../generated/schema"

export function handleDeposit(event: DepositEvent): void {
  let entity = new Deposit(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.addr = event.params.addr
  entity.beneficiary = event.params.beneficiary
  entity.validator = event.params.validator
  entity.amount = event.params.amount
  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleWithdraw(event: WithdrawEvent): void {
  let entity = new Withdraw(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.addr = event.params.addr
  entity.validator = event.params.validator
  entity.amount = event.params.amount
  entity.save()
}
