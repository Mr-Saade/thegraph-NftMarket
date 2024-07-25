import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { ListingCancelled } from "../generated/schema"
import { ListingCancelled as ListingCancelledEvent } from "../generated/NftMarketplace/NftMarketplace"
import { handleListingCancelled } from "../src/nft-marketplace"
import { createListingCancelledEvent } from "./nft-marketplace-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _tokenAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let _tokenId = BigInt.fromI32(234)
    let newListingCancelledEvent = createListingCancelledEvent(
      _tokenAddress,
      _tokenId
    )
    handleListingCancelled(newListingCancelledEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ListingCancelled created and stored", () => {
    assert.entityCount("ListingCancelled", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ListingCancelled",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_tokenAddress",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ListingCancelled",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_tokenId",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
