class SuffixTrie {
    constructor(str) {
        this.root = {};
        this.endSymbol = "*";
        this.populateSuffixTrieFrom(str);
    }

    populateSuffixTrieFrom(str) {
        for (let i = 0; i < str.length; i++) {
            this.insertSubstringStartingAt(i, str);
        }
    }

    insertSubstringStartingAt(i, str) {
        // console.log(i,"-",str);
        let node = this.root;
        for (let j = i; j < str.length; j++) {
            const char = str[j];
            if (!(char in node)) {
                node[char] = {};
            }
            node = node[char];
        }
        node[this.endSymbol] = true;
    }

    contains(str) {
        let node = this.root;
        for (const char of str) {
            if (!(char in node)) {
                return false;
            }
            node = node[char];
        }
        return this.endSymbol in node;
    }
}
let tree = new SuffixTrie("hello")
tree.populateSuffixTrieFrom("hell")
console.log(tree.contains("hel"));