const numbers = [12, 44, 32, 42, 4, 55, 17]

function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element === target) {
            return i;
        }
    }
    return -1;
}

const index = linearSearch(numbers, 12)
console.log('Index is', index)