/* star level 6 */
const rhombus = (height) => {
    let star = "";
    let starRepetition = 0;
    let count = 1;
    if(height % 2 === 0){
        height = height-1;
    }
    if(height < 2){
        console.log("1줄짜리 마름모는 없습니다!! 다시 입력해 주세요.");
        return;
    }
    for(let i=Math.ceil(height/2); i>0; i--){
        for(let j=1; j<=Math.ceil(height/2); j++){
            if(i>j){
                star += " ";
            }
        }
        for(let k=0; k<count; k++){
            star += "*";
        }
        console.log(star);
        star = "";
        count += 2;
    }
    count -= 4;
    for(let i=0; i<Math.floor(height/2); i++){
        for(let j=0; j<Math.floor(height/2); j++){
            if(i>=j){
                star += " ";
            }
        }
        for(let k=count; k>0; k--){
            star += "*";
        }
        console.log(star);
        star = "";
        count -= 2;
    }
}
rhombus(0);
rhombus(1);
rhombus(2);
rhombus(3);
rhombus(4);
rhombus(5);
rhombus(6);
rhombus(7);