const hash = (key, size) => {
    let hashedKey = 0;
    for (i = 0; i < key.length; i++){
        hashedKey = key.charCodeAt(i)
    }
    console.log(hashedKey % size);
    return hashedKey % size;
}

class HashTable{
    constructor() {
        this.size = 20
        this.buckets = Array(this.size)
        for (let i = 0; i < this.buckets.length; i++){
            this.buckets[i]=new Map()
        }
    }

    insert(key,value) {
        let index = hash(key, this.size)
        this.buckets[index].set(key,value)
    }

    remove() {
        let idx = hash(key, this.size)
        let deleted = this.buckets[idx].get(key)
        this.buckets[idx].delete(key)
        return deleted
    }

    search(key) {
        let idx = hash(key, this.size)
        console.log(this.buckets[idx].get(key));
        return this.buckets[idx].get(key)
    }
}

const hashTable = new HashTable()

hashTable.insert('luffy', 'captain')
hashTable.insert('zoro', 'loyal')
hashTable.insert('sanji','chef')

hashTable.search('luffy')

hashTable.search('sanji')

