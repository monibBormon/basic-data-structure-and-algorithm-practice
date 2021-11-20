//Stack Data Structure
// Last In First Out => LIFO

class Stack {
    constructor() {
        this.stack = []
    }
    add(element) {
        this.stack.push(element)
    }
    remove() {
        return this.stack.pop()
    }
}

const plates = new Stack()
plates.add('abul');
plates.add('babul');
plates.add('jabul');
plates.add('kabul');
plates.add('sabul')

console.log(plates.stack);

plates.remove()
console.log(plates.stack);