const numbers = [23, 12, 1, 34, 42, 24, 45]

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) { // can see >< using ascending and decending
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
            }

        }
    }
    return array
}

const sort = bubbleSort(numbers)
console.log(sort);