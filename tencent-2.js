const add = [3, 1, -4, 2, 8, -1000, 2];
const get = [1, 2, 6, 6];

const main = (input, output) => {
    const temp = [];
    const result = [];
    let k = 1;
    let j = 0;
    for(let i = 0; i < input.length; i++){
        let index = helper(input[i], temp);
        temp.splice(index, 0, input[i]);
        while((output[j] - 1) === i){
            result.push(temp[k - 1]);
            j++;
            k++;
        }
    }
    console.log(result);
};
const helper = (a, array) => {
    if(array.length === 0) return 0;
    let start = 0;
    let end = array.length;
    if(a > array[end - 1]) return end;
    if(a < array[0]) return start;
    while(start <= end){
        let mid = parseInt((start + end) / 2);
        if(a === array[mid]) return  mid;
        else if(a > array[mid]) start = mid + 1;
        else if(a < array[mid]) end = mid -1;
    }
    return start;
};
main(add, get);