class hashTable{
    constructor(size) {
        this.data = new Array(size)
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    set(key, value) {
        let address = this._hash(key)
        if (!this.data[address]) {
            this.data[address] = [];  
        }
        this.data[address].push([key, value])
    }

    get(key) {
        let address = this.hashFunction(key)
        let currentBucket = this.data[address];
        if (currentBucket.length) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    console.log(currentBucket[i][1], "<----get");
                    return currentBucket[i][1]
                }
            }
        }
    }

    getAll() {
        const allArray = []
        for (let i = 0; i < this.data.length; i++){
            if (this.data[i]) {
                allArray.push(this.data[i],[0],[0])
            }
        }
        return allArray;
    }
}

const myHashTable = new hashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.set('maanga', 124122)



myHashTable.get('maanga') 

