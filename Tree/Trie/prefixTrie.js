class Node {
    constructor() {
        this.children = new Map()
        this.isEnd = false;
    }
}
class prefixTrie {
    constructor() {
        this.root = new Node()
    }
    insert(word) {
        let curr = this.root;
        for (let char of word) {
            let child = curr.children.get(char)
            if (!child) {
                child = new Node()
                curr.children.set(char, child)
            }
            curr = child
        }
        curr.isEnd = true
    }
    contain(word) {
        let curr = this.root
        for (const char of word) {
            let child = curr.children.get(char)
            if (!child) return false

            curr = child
        }
        return curr.isEnd;
    }
    startsWith(prefix) {
        let curr = this.root
        for (let char of prefix) {
            let child = curr.children.get(char)
            if (!child) {
                return false
            }
            curr = child
        }
        return true

    }
    delete(word) {
        // Handle empty or null word
        if (!word) return;

        let current = this.root;
        let parent;
        let parentKey;

        // Traverse the trie to find the node representing the last character of the word
        for (const char of word) {
            parent = current;
            parentKey = char;
            current = current.children.get(char);

            if (!current) {
                // The word does not exist in the trie
                return;
            }
        }

        // If the node representing the last character is not marked as the end of a word, then the word does not exist in the trie
        if (!current.isEnd) {
            return;
        }

        // If the node has children, then only mark it as the end of a word
        if (current.children.size > 0) {
            current.isEnd = false;
            return;
        }

        // If the node has no children, delete it and its parent(s) until we reach the root or a parent with more than one child
        while (current.children.size === 0) {
            if (!parent) {
                break;
            }
            parent.children.delete(parentKey);
            if (parent.isEnd || parent === this.root || parent.children.size > 1) {
                break;
            }
            current = parent;
            parentKey = Array.from(current.children.keys())[0];
            parent = current.children.get(parentKey);
        }
    }

}
const trie = new prefixTrie();
trie.insert("word");
trie.insert("words");
trie.insert("hello");
console.log(trie.contain("word"));   // returns true
console.log(trie.contain("anotherword"));  // returns false
console.log(trie.startsWith("wor"));  // returns true
console.log(trie.startsWith("prefix"));


console.log(trie.contain("hello")); // outputs: true
trie.delete("hello");
console.log(trie.contain("hello")); // outputs: false


// console.log(trie.root);