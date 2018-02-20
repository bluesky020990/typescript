/*
* De khai bao mot module, dau tien ta khoi tao module do nhu sau :
* su dung tu khoa module
* */

module NumberUtils {
    // sau do export class tu trong module do ra

    export class Number {
        plus = (number1 : number, number2: number) : number => {
            return number1 + number2;
        };

        minus = (number1 : number, number2: number) : number => {
            return number1 - number2;
        };
    }
}

// va co the su dung no mot cach de dang. Luc nay, class Number dc compiler thanh 1 function
// ben trong module tren nen se ko bi trung lap

// var numberUtils = new NumberUtils.Number();
// console.log(numberUtils.plus(10, 20));


/* EXPORT VA IMPORT MODULE */
/*
* De export product ta su dung cu phap
* */

export let numberUtilsModule = "NumberUtils";