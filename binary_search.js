const numbers = [10, 14, 43, 66, 76, 78, 98, 111, 121, 135, 154]

function binarySearch(array, target) {
    let start = 0
    let end = array.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (array[mid] === target) {
            return mid
        }
        if (target < array[mid]) {
            end = mid - 1;
        }
        if (target > array[mid]) {
            start = mid + 1
        }
    }
    return -1;
}

const index = binarySearch(numbers, 98)
console.log(index);