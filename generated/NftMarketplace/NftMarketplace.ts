// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class ListingCancelled extends ethereum.Event {
  get params(): ListingCancelled__Params {
    return new ListingCancelled__Params(this);
  }
}

export class ListingCancelled__Params {
  _event: ListingCancelled;

  constructor(event: ListingCancelled) {
    this._event = event;
  }

  get _tokenAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class ListingUpdated extends ethereum.Event {
  get params(): ListingUpdated__Params {
    return new ListingUpdated__Params(this);
  }
}

export class ListingUpdated__Params {
  _event: ListingUpdated;

  constructor(event: ListingUpdated) {
    this._event = event;
  }

  get _tokenAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get _oldPrice(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _newPrice(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class NftBought extends ethereum.Event {
  get params(): NftBought__Params {
    return new NftBought__Params(this);
  }
}

export class NftBought__Params {
  _event: NftBought;

  constructor(event: NftBought) {
    this._event = event;
  }

  get _seller(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _buyer(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _tokenAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get _price(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get _tokenId(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class NftListed extends ethereum.Event {
  get params(): NftListed__Params {
    return new NftListed__Params(this);
  }
}

export class NftListed__Params {
  _event: NftListed;

  constructor(event: NftListed) {
    this._event = event;
  }

  get _tokenAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _nftOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _price(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _tokenId(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class ProceedsWithdrawn extends ethereum.Event {
  get params(): ProceedsWithdrawn__Params {
    return new ProceedsWithdrawn__Params(this);
  }
}

export class ProceedsWithdrawn__Params {
  _event: ProceedsWithdrawn;

  constructor(event: ProceedsWithdrawn) {
    this._event = event;
  }

  get _withdrawer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _proceeds(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class NftMarketplace__getListingsResultValue0Struct extends ethereum.Tuple {
  get price(): BigInt {
    return this[0].toBigInt();
  }

  get seller(): Address {
    return this[1].toAddress();
  }
}

export class NftMarketplace extends ethereum.SmartContract {
  static bind(address: Address): NftMarketplace {
    return new NftMarketplace("NftMarketplace", address);
  }

  getListings(
    _tokenAddress: Address,
    _tokenId: BigInt,
  ): NftMarketplace__getListingsResultValue0Struct {
    let result = super.call(
      "getListings",
      "getListings(address,uint256):((uint256,address))",
      [
        ethereum.Value.fromAddress(_tokenAddress),
        ethereum.Value.fromUnsignedBigInt(_tokenId),
      ],
    );

    return changetype<NftMarketplace__getListingsResultValue0Struct>(
      result[0].toTuple(),
    );
  }

  try_getListings(
    _tokenAddress: Address,
    _tokenId: BigInt,
  ): ethereum.CallResult<NftMarketplace__getListingsResultValue0Struct> {
    let result = super.tryCall(
      "getListings",
      "getListings(address,uint256):((uint256,address))",
      [
        ethereum.Value.fromAddress(_tokenAddress),
        ethereum.Value.fromUnsignedBigInt(_tokenId),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<NftMarketplace__getListingsResultValue0Struct>(
        value[0].toTuple(),
      ),
    );
  }

  getProceeds(_seller: Address): BigInt {
    let result = super.call("getProceeds", "getProceeds(address):(uint256)", [
      ethereum.Value.fromAddress(_seller),
    ]);

    return result[0].toBigInt();
  }

  try_getProceeds(_seller: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getProceeds",
      "getProceeds(address):(uint256)",
      [ethereum.Value.fromAddress(_seller)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class BuyNftCall extends ethereum.Call {
  get inputs(): BuyNftCall__Inputs {
    return new BuyNftCall__Inputs(this);
  }

  get outputs(): BuyNftCall__Outputs {
    return new BuyNftCall__Outputs(this);
  }
}

export class BuyNftCall__Inputs {
  _call: BuyNftCall;

  constructor(call: BuyNftCall) {
    this._call = call;
  }

  get _tokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class BuyNftCall__Outputs {
  _call: BuyNftCall;

  constructor(call: BuyNftCall) {
    this._call = call;
  }
}

export class CancelListingCall extends ethereum.Call {
  get inputs(): CancelListingCall__Inputs {
    return new CancelListingCall__Inputs(this);
  }

  get outputs(): CancelListingCall__Outputs {
    return new CancelListingCall__Outputs(this);
  }
}

export class CancelListingCall__Inputs {
  _call: CancelListingCall;

  constructor(call: CancelListingCall) {
    this._call = call;
  }

  get _tokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class CancelListingCall__Outputs {
  _call: CancelListingCall;

  constructor(call: CancelListingCall) {
    this._call = call;
  }
}

export class ListNftCall extends ethereum.Call {
  get inputs(): ListNftCall__Inputs {
    return new ListNftCall__Inputs(this);
  }

  get outputs(): ListNftCall__Outputs {
    return new ListNftCall__Outputs(this);
  }
}

export class ListNftCall__Inputs {
  _call: ListNftCall;

  constructor(call: ListNftCall) {
    this._call = call;
  }

  get _tokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _price(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class ListNftCall__Outputs {
  _call: ListNftCall;

  constructor(call: ListNftCall) {
    this._call = call;
  }
}

export class UpdateListingCall extends ethereum.Call {
  get inputs(): UpdateListingCall__Inputs {
    return new UpdateListingCall__Inputs(this);
  }

  get outputs(): UpdateListingCall__Outputs {
    return new UpdateListingCall__Outputs(this);
  }
}

export class UpdateListingCall__Inputs {
  _call: UpdateListingCall;

  constructor(call: UpdateListingCall) {
    this._call = call;
  }

  get _tokenAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _price(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class UpdateListingCall__Outputs {
  _call: UpdateListingCall;

  constructor(call: UpdateListingCall) {
    this._call = call;
  }
}

export class WithdrawProceedsCall extends ethereum.Call {
  get inputs(): WithdrawProceedsCall__Inputs {
    return new WithdrawProceedsCall__Inputs(this);
  }

  get outputs(): WithdrawProceedsCall__Outputs {
    return new WithdrawProceedsCall__Outputs(this);
  }
}

export class WithdrawProceedsCall__Inputs {
  _call: WithdrawProceedsCall;

  constructor(call: WithdrawProceedsCall) {
    this._call = call;
  }
}

export class WithdrawProceedsCall__Outputs {
  _call: WithdrawProceedsCall;

  constructor(call: WithdrawProceedsCall) {
    this._call = call;
  }
}
