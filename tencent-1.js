const a = 10;
const b = 5;
const c = 3 % a;

const main = (n, m, s) => {
    const array = [];
    const result = [];
    for(let i = 0; i < n; i++){
        array.push(i);
    }
    helper(s - 1);
    console.log(result);
    function helper(start) {
        if(array.length === 0) return;
        let len = array.length;
        let pos = (start + m - 1) % len;
        result.push(array[pos]);
        array.splice(pos, 1);
        helper(pos);
    }
};

main(a, b, c);