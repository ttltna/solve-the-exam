/* star level 3 */
const rightBottomTryangle = (row, column) => { //오른쪽 아래 정렬 삼각형
    let star = "";
    if(column > row){
        column = row;
    }
    for(let i = row; i>0; i--){
        for(let j = 1; j<=column; j++){
            if(i>j){
                star += " ";
            }else{
                star += "*";
            }
        }
        console.log(star);
        star = "";
    }
}
rightBottomTryangle(6,10);

const rightTopTryangle = (row, column) => { //오른쪽 위 정렬 삼각형
    let star = "";
    if(column > row){
        column = row;
    }
    for(let i=0; i<column; i++){
        for(let j=0; j<row; j++){
            if(i<=j){
                star += "*";
            }else{
                star += " ";
            }
        }
        console.log(star);
        star= "";
    }
}
rightTopTryangle(6,10);