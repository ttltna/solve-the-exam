/* star level 1 */
const square = (width,height) => {
    let star = "";
    for(let i = 0; i < width; i++){
        for(let j = 0; j < height; j++){
            star += "*";
        }
        console.log(star);
        star = ""
    }
}