import { MongoClient } from "mongodb";

const MONGO_URL = "mongodb+srv://trungnm14498:QSsMRXRxPYvCwA8F@cluster0.e1ompoy.mongodb.net/test";

export const client = new MongoClient(MONGO_URL);

export const users = client.db('test').collection('users');

export const inventory = client.db('test').collection('inventory');

export const order = client.db('test').collection('order');
