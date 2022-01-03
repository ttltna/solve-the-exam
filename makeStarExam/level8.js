/* star level 8 */
const oddNumber = (height) => { //홀수일때
    let star = "";
    let count = 1;
    let topHeight = Math.ceil(height / 2);
    let bottomHeight = Math.floor(height / 2);
    if(height < 2){
        console.log("3이상의 숫자를 입력해 주세요!!");
        return;
    }
    for(let i=0; i<topHeight; i++){
        for(let j=0; j<count; j++){
            star += "*";
        }
        console.log(star);
        star = "";
        count += 2;
    }
    count -= 4;
    for(let i=0; i<bottomHeight; i++){
        for(let j=0; j<count; j++){
            star += "*";
        }
        console.log(star);
        star = "";
        count -= 2;
    }
}

const evenNumber = (height) => { //짝수일때
    let star = "";
    let count = 2;
    height /= 2;
    if(height < 2){
        console.log("3이상의 숫자를 입력해 주세요!!");
        return;
    }
    for(let i=0; i<height; i++){
        for(let j=0; j<count; j++){
            star += "*";
        }
        console.log(star);
        star = "";
        count += 2;
    }
    count -= 2;
    for(let i=0; i<height; i++){
        for(let j=0; j<count; j++){
            star += "*";
        }
        console.log(star);
        star = "";
        count -= 2;
    }
}

const rightArrow = (height) => {
    height % 2 === 0 ? evenNumber(height) : oddNumber(height);
}

rightArrow(3);
console.log("\n");

rightArrow(5);
console.log("\n");

rightArrow(7);
console.log("\n");

rightArrow(9);
console.log("\n");

rightArrow(2);
console.log("\n");

rightArrow(4);
console.log("\n");

rightArrow(6);
console.log("\n");

rightArrow(8);