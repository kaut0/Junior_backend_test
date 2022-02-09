// 1.  Snake Case
let snake_input = "Pandu Juang"
let snake_input2 = "Here comes the garden"
function snake_case(string) {
    // let lower_case = string.toLowerCase()
    // return lower_case.split(" ").join("_")
    let str = "";
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) == ' ') {
            str += "_";
        } else {
            str += string.charAt(i);
        }
    }
    return str.toLowerCase()
}
console.log('Soal Pertama : ', snake_case(snake_input))


// 2. Count Smaller Elements
function count_elements(arr, target) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= target) {
            count += 1
        }
    }
    return count
}
let input_1 = [1, 2, 4, 5, 8, 10]
let input_2 = [1, 2, 2, 2, 5, 7, 9]
console.log('Soal Kedua : ', count_elements(input_1, 9))


// 3. Duplicates without set or hashmap
let input = [2, 2, 2, 2, 2]
let input2 = [1, 2, 2, 2]
function remove_duplicates(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                arr.splice(arr[i], 1)
            }
        }
    }
    return arr
}
console.log('Soal Ketiga : ', remove_duplicates(input2))

