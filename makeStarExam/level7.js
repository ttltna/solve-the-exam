/* star level 7 */
const square = (row, column) => {
    let star = "";
    for(let i=0; i<column; i++){
        for(let j=0; j<row; j++){
            if(i === 0 || i === column-1){
                star += "*";
            }else if(j === 0 || j === row-1){
                star += "*";
            }else{
                star += " ";
            }
        }
        console.log(star);
        star = "";
    }
}
square(10,10);