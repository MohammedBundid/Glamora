import { Account, Client, Databases, Storage } from "appwrite";

const client = new Client();

export const config = {
    endpoint: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT,
    projectId: process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
    databaseId: process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID,
    collectionUsers: process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID_USERS,
    collecionSales: process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID_SALES,
    collectionProducts: process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID_PRODUCTS,
    storeMediabucketId: process.env.NEXT_PUBLIC_APPWRITE_BUCKET_ID_STORE_MEDIA
}

if  (
        !config.endpoint || !config.projectId || !config.databaseId || !config.collectionUsers || !config.collecionSales ||
        !config.collectionProducts || !config.storeMediabucketId
    ) {
    throw new Error('Appwrite configuration is missing. Please check your .env file.');
}

client
    .setEndpoint(config.endpoint)
    .setProject(config.projectId);

export const account = new Account(client);
export const database = new Databases(client);
export const storage = new Storage(client);
export { ID } from 'appwrite';

export default client;