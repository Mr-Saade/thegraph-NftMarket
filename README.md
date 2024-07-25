# NFT Marketplace Indexing with The Graph

This project uses The Graph protocol to index and query data from the NFT Marketplace smart contract.

The Graph is used to create a subgraph that indexes events from the NFT Marketplace smart contract. This allows querying and retrieving data about listings, purchases, cancellations, updates, and withdrawals in a more efficient and scalable way.

A separate front end built for the NFT marketplace will use this subgraph to fetch and display data. The front end will make GraphQL queries to the subgraph to retrieve information about NFT listings, purchases, cancellations, updates, and withdrawals. This integration ensures that the front end has real-time access to the indexed data, providing a seamless user experience.
