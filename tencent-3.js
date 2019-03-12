const input = [1, 99, 100, 98, 97, 96, 2, 1];
const m = 4;

const main = (array, number) => {
    let result = 0;
    for(let i = 0; i < m; i++){
        let temp = Math.max.apply(Math, array);
        let index = array.indexOf(temp);
        result += array[index];
        if(array.length > 4){
            let addNumber = array[index - 1] + array[index + 1] - array[index];
            array.splice(index, 1, addNumber);
            if(index === 0){
                array.splice(array.length - 2, 2);
                array.splice(1, 1);
                array.push(array[0]);
            }
            else if(index === array.length - 1){
                array.splice(array.length - 2, 1);
                array.splice(0, 2);
                array.splice(0, 0, array[array.length - 1]);
            }
            else if(index === 1){
                array.splice(array.length - 1, 1);
                array.splice(0, 1);
                array.splice(1, 1);
                array.push(array[0]);
            }
            else if(index === array.length - 1){
                array.splice(array.length - 1, 1);
                array.splice(array.length - 2, 1);
                array.splice(0, 1);
                array.splice(0, 0, array[array.length - 1]);
            }
            else{
                array.splice(index + 1, 1);
                array.splice(index - 1, 1);
            }
        }
        else break;
    }
    console.log(result);
};
main(input, m);