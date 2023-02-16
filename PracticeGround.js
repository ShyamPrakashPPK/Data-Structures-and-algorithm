class hashTable{
    constructor(value) {
          this.data=Array(value)
    }
    

    hashFunction(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++){
            hash=(hash+key.charCodeAt(i)*i)%this.data.length
        }
    }


  }

