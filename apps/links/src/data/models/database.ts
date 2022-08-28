import { CosmosClient } from "@azure/cosmos";

// Initialize the CosmosDB client | Connect to the database
const endpoint = process.env.COSMOSDB_ENDPOINT || "";
const key = process.env.COSMOSDB_KEY;
const client = new CosmosClient({ endpoint, key });

export async function getContainer(id: string) {
  // Get database response object
  const { database } = await client.databases.createIfNotExists({
    id: process.env.COSMOSDB_DATABASE,
  });

  // Get links container response object
  return (await database.containers.createIfNotExists({ id })).container;
}
