import { MongoClient, MongoError, Db } from 'mongodb';
import * as config from 'acm';

const url = config('mongo.url');
var connecting: Promise<Db>;

export function connect(): Promise<Db> {
    if (!connecting) {
        connecting = MongoClient.connect(url);
    }

    return connecting;
}
