/* star level 4 */
const equilateralTriangle = (height) => {
    let star = "";
    let count = 1;
    for(let i=height; i>0; i--){
        for(let j=1; j<=height; j++){
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
}
equilateralTriangle(4);