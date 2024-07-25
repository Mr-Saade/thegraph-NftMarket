import {Address, BigInt, Bytes} from "@graphprotocol/graph-ts";

import {
  ListingCancelled as ListingCancelledEvent,
  NftBought as NftBoughtEvent,
  NftListed as NftListedEvent,
  ProceedsWithdrawn as ProceedsWithdrawnEvent,
  ListingUpdated as ListingUpdatedEvent,
} from "../generated/NftMarketplace/NftMarketplace";
import {
  ListingCancelled,
  NftBought,
  NftListed,
  ProceedsWithdraw,
  ActiveItem,
  Account,
} from "../generated/schema";

export function handleNftListed(event: NftListedEvent): void {
  let itemListedEntity = new NftListed(
    getIdfromEventParams(event.params._tokenAddress, event.params._tokenId)
  );
  let activeItemEntity = new ActiveItem(
    getIdfromEventParams(event.params._tokenAddress, event.params._tokenId)
  );
  let ownerAccount = createOrLoadAccount(event.params._nftOwner);
  itemListedEntity._tokenAddress = event.params._tokenAddress;
  activeItemEntity._tokenAddress = event.params._tokenAddress;

  itemListedEntity.nftOwner = ownerAccount.id;
  activeItemEntity.seller = ownerAccount.id;

  itemListedEntity._price = event.params._price;
  activeItemEntity._price = event.params._price;

  itemListedEntity._tokenId = event.params._tokenId;
  activeItemEntity._tokenId = event.params._tokenId;

  itemListedEntity.save();
  activeItemEntity.save();
}

export function handleListingCancelled(event: ListingCancelledEvent): void {
  let cancelItemEntity = new ListingCancelled(
    getIdfromEventParams(event.params._tokenAddress, event.params._tokenId)
  );
  cancelItemEntity._tokenAddress = event.params._tokenAddress;
  cancelItemEntity._tokenId = event.params._tokenId;

  cancelItemEntity.save();

  let activeItemEntity = ActiveItem.load(
    getIdfromEventParams(event.params._tokenAddress, event.params._tokenId)
  );

  if (activeItemEntity) {
    let buyerAccount = createOrLoadAccount(
      Address.fromString("0x000000000000000000000000000000000000dEaD")
    );
    activeItemEntity.buyer = buyerAccount.id;
    activeItemEntity.save();
  }
}

export function handleListingUpdated(event: ListingUpdatedEvent): void {
  let updatedItemListedEntity = NftListed.load(
    getIdfromEventParams(event.params._tokenAddress, event.params._tokenId)
  );
  if (updatedItemListedEntity) {
    updatedItemListedEntity._price = event.params._newPrice;
    updatedItemListedEntity.save();
  }

  let activeItemEntity = ActiveItem.load(
    getIdfromEventParams(event.params._tokenAddress, event.params._tokenId)
  );
  if (activeItemEntity) {
    activeItemEntity._price = event.params._newPrice;

    activeItemEntity.save();
  }
}

export function handleNftBought(event: NftBoughtEvent): void {
  let boughtEntity = NftBought.load(
    getIdfromEventParams(event.params._tokenAddress, event.params._tokenId)
  );
  let buyerAccount = createOrLoadAccount(event.params._buyer);
  if (!boughtEntity) {
    boughtEntity = new NftBought(
      getIdfromEventParams(event.params._tokenAddress, event.params._tokenId)
    );
    boughtEntity.buyer = buyerAccount.id;
    boughtEntity._tokenAddress = event.params._tokenAddress;
    boughtEntity._price = event.params._price;
    boughtEntity._tokenId = event.params._tokenId;

    boughtEntity.save();
  }

  let activeItemEntity = ActiveItem.load(
    getIdfromEventParams(event.params._tokenAddress, event.params._tokenId)
  );
  if (activeItemEntity) {
    activeItemEntity.buyer = buyerAccount.id;

    activeItemEntity.save();
  }
}

export function handleProceedsWithdrawn(event: ProceedsWithdrawnEvent): void {
  let proceedsEntity = new ProceedsWithdraw(event.transaction.hash.toHex());
  let sellerAccount = createOrLoadAccount(event.params._withdrawer);
  proceedsEntity.seller = sellerAccount.id;
  proceedsEntity.amount = event.params._proceeds;

  proceedsEntity.save();
}

function getIdfromEventParams(
  _tokenAddress: Address,
  _tokenId: BigInt
): string {
  return _tokenAddress.toString() + "-" + _tokenId.toString();
}

function createOrLoadAccount(address: Address): Account {
  let accountEntity = Account.load(address);
  if (!accountEntity) {
    accountEntity = new Account(address);
    accountEntity.save();
  }
  return accountEntity as Account;
}
