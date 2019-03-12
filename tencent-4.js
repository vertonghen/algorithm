const route = [[2, 5], [7, 9], [11, 12]];
const v = 2;
const main = (speed, fans) => {
    let max = 0;
    for(let i = 0; i < fans.length; i++){
        let nowSpeed = speed;
        let temp = 0;
        let j = i;
        while(j < fans.length){
            temp += (fans[j][1] - fans[j][0]);
            if(j < fans.length - 1){
                nowSpeed = nowSpeed - (fans[j + 1][0] - fans[j][1]);
                if(nowSpeed <= 0){
                    temp += nowSpeed + (fans[j + 1][0] - fans[j][1]);
                    break;
                }
                else{
                    temp += (fans[j + 1][0] - fans[j][1]);
                    j++;
                }
            }
            else{
                temp += nowSpeed;
                j++;
            }
        }
        max = Math.max(temp, max);
        console.log(max);
    }
};
main(v, route);