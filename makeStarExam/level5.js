/* star level 5 */
const invertedTriangle = (height) => {
    let star = "";
    let count = (height*2) - 1;
    for(let i=0; i<height; i++){
        for(let j=0; j<height; j++){
            if(i>j){
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
invertedTriangle(7);