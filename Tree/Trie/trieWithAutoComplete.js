 class Node {
    constructor(data) {
        this.value = data
        this.children = new Map()
        this.isEnd = false
    }
}

class prefixTrie {
    constructor() {
        this.root = new Node()
    }

    insert(word) {
        let curr = this.root
        for (let char of word) {
            if (!curr.children.has(char)) {
                curr.children.set(char, new Node(char))
            }
            curr = curr.children.get(char)
        }
        curr.isEnd = true
    }
z  
    contains(word) {
        let curr = this.root
        for (let char of word) {
            let child = curr.children.get(char)
            if (!child) return false
            curr = child
        }
        return curr.isEnd
    }

    auto(prefix) {
        var res = new Array()
        let curr = this.root
        for (let char of prefix) {
            if (curr.children.has(char)) {
                curr = curr.children.get(char)
            }
            else { 
                return res
            }
        }
        this.helper(curr, res, prefix.substring(0, prefix.length - 1))
        return res
    }

    helper(curr, res, prefix) {
        if (curr.isEnd) {
            res.push(prefix + curr.value)
        }
        for (let c of curr.children.keys()) {
            this.helper(curr.children.get(c), res, prefix + curr.value)
        }
    }
}
const pt = new prefixTrie()
pt.insert('BAT')
pt.insert('BALL')
pt.insert('BAN')
console.log(pt.auto('BA'));