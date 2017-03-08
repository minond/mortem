import { connect } from '../device/mongo';

enum Type {
    LOG = <any>'log';
}

class Entry {
    type: Type;
    timestamp: Date;
}

export function save(type: Type): Promise<boolean> {
    return connect().then(db => {
        db.collection(type).insertOne
    });
}
