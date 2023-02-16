class HashTable {
    constructor() {
        this.table = {};
    }

    put(key, value) {
        this.table[key] = value;
    }

    get(key) {
        return this.table[key];
    }

    remove(key) {
        delete this.table[key];
    }
}

const hashTable = new HashTable();
hashTable.put("key1", "value1");
hashTable.put("key2", "value2");

console.log(hashTable.get("key1")); // "value1"
console.log(hashTable.get("key2")); // "value2"

hashTable.remove("key1");
console.log(hashTable.get("key1")); // undefined
