/* star level 2 */
const leftBottomTryangle = (row, column) => { //왼쪽 아래 정렬 삼각형
    let star = "";
    if(column > row){
        column = row;
    }
    for(let i = 0; i < column; i++){
        for(let j = 0; j < row; j++){
            if(i>=j){
                star += "*";
            }
        }
        console.log(star);
        star ="";
    }
}
leftBottomTryangle(8,10);

const leftTopTryangle = (row, column) => { //왼쪽 위 정렬 삼각형
    let star = "";
    if(column > row){
        column = row;
    }
    for(let i = 0; i < column; i++){
        for(let j = 0; j < row; j++){
            if(i<=j){
                star += "*";
            }
            
        }
        console.log(star);
        star ="";
    }
}
leftTopTryangle(5,12);