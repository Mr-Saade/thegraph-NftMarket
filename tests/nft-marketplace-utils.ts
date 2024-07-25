import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  ListingCancelled,
  ListingUpdated,
  NftBought,
  NftListed,
  ProceedsWithdrawn
} from "../generated/NftMarketplace/NftMarketplace"

export function createListingCancelledEvent(
  _tokenAddress: Address,
  _tokenId: BigInt
): ListingCancelled {
  let listingCancelledEvent = changetype<ListingCancelled>(newMockEvent())

  listingCancelledEvent.parameters = new Array()

  listingCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenAddress",
      ethereum.Value.fromAddress(_tokenAddress)
    )
  )
  listingCancelledEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )

  return listingCancelledEvent
}

export function createListingUpdatedEvent(
  _tokenAddress: Address,
  _tokenId: BigInt,
  _oldPrice: BigInt,
  _newPrice: BigInt
): ListingUpdated {
  let listingUpdatedEvent = changetype<ListingUpdated>(newMockEvent())

  listingUpdatedEvent.parameters = new Array()

  listingUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenAddress",
      ethereum.Value.fromAddress(_tokenAddress)
    )
  )
  listingUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )
  listingUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_oldPrice",
      ethereum.Value.fromUnsignedBigInt(_oldPrice)
    )
  )
  listingUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "_newPrice",
      ethereum.Value.fromUnsignedBigInt(_newPrice)
    )
  )

  return listingUpdatedEvent
}

export function createNftBoughtEvent(
  _seller: Address,
  _buyer: Address,
  _tokenAddress: Address,
  _price: BigInt,
  _tokenId: BigInt
): NftBought {
  let nftBoughtEvent = changetype<NftBought>(newMockEvent())

  nftBoughtEvent.parameters = new Array()

  nftBoughtEvent.parameters.push(
    new ethereum.EventParam("_seller", ethereum.Value.fromAddress(_seller))
  )
  nftBoughtEvent.parameters.push(
    new ethereum.EventParam("_buyer", ethereum.Value.fromAddress(_buyer))
  )
  nftBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenAddress",
      ethereum.Value.fromAddress(_tokenAddress)
    )
  )
  nftBoughtEvent.parameters.push(
    new ethereum.EventParam("_price", ethereum.Value.fromUnsignedBigInt(_price))
  )
  nftBoughtEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )

  return nftBoughtEvent
}

export function createNftListedEvent(
  _tokenAddress: Address,
  _nftOwner: Address,
  _price: BigInt,
  _tokenId: BigInt
): NftListed {
  let nftListedEvent = changetype<NftListed>(newMockEvent())

  nftListedEvent.parameters = new Array()

  nftListedEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenAddress",
      ethereum.Value.fromAddress(_tokenAddress)
    )
  )
  nftListedEvent.parameters.push(
    new ethereum.EventParam("_nftOwner", ethereum.Value.fromAddress(_nftOwner))
  )
  nftListedEvent.parameters.push(
    new ethereum.EventParam("_price", ethereum.Value.fromUnsignedBigInt(_price))
  )
  nftListedEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )

  return nftListedEvent
}

export function createProceedsWithdrawnEvent(
  _withdrawer: Address,
  _proceeds: BigInt
): ProceedsWithdrawn {
  let proceedsWithdrawnEvent = changetype<ProceedsWithdrawn>(newMockEvent())

  proceedsWithdrawnEvent.parameters = new Array()

  proceedsWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "_withdrawer",
      ethereum.Value.fromAddress(_withdrawer)
    )
  )
  proceedsWithdrawnEvent.parameters.push(
    new ethereum.EventParam(
      "_proceeds",
      ethereum.Value.fromUnsignedBigInt(_proceeds)
    )
  )

  return proceedsWithdrawnEvent
}
