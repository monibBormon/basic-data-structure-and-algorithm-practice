// Queue DS => FiFo

class Queue {
    constructor() {
        this.queue = []
    }
    enqueue(element) {
        this.queue.push(element)
    }
    dequeue() {
        this.queue.shift()
    }
}

const premiks = new Queue()

premiks.enqueue('Prem');
premiks.enqueue('Raj');
premiks.enqueue('Salman');
premiks.enqueue('Akshay')
console.log(premiks.queue)

premiks.dequeue()
console.log(premiks.queue);