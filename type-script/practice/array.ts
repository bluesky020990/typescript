// Example array
let arrayNumber:number[] = [10, 20, 30, 40, 50, 15, 25, 55, 60];

console.log(arrayNumber[0]);
console.log(arrayNumber[1]);

let arrayString :string[] = new Array("Khanh Tran", "Moi Moi", "Cu Oc", "Be Huong");


console.log(arrayString[0]);
console.log(arrayString[1]);



// concat function se push cac element / array vao cung 1 array va return 1 array moi la tong
// cua cac array con.
console.log("Example Concat function!!");

console.log(arrayString);
arrayString = arrayString.concat("Cu Ghe", "Be Cana");
console.log("Result of the concat function");
console.log(arrayString);

// arrayString = arrayString.concat(arrayNumber);
// console.log(arrayString);

console.log("Example every function !!");
/*
* every su dung parameter la 1 call back function, voi cac tham so la element, index, va array
* Kieu du lieu tra ve cua call back la kieu boolean : true / false. Va gia tri true, neu nhu toan bo
* cac element cua array truyen vao tham so tra lai gia tri la true.
*
* Vi du nhu truong hop tren kia, ta co 1 day number, va ta muon kiem tra xem array kia co chia het cho 5 ko?
*
* */


function isTimesOfFive (element, index, array):boolean{
    return element % 5 == 0 ? true : false;
}

console.log(arrayNumber.every(isTimesOfFive));


console.log("Example of some function !!!");
/*
* Some Function truyen vao 1 callback function(element, index, array) de test xem co bat cu mot phan tu nao do
* thoa man dieu kien dat ra khong.
*
* Cai nay thi tuong tu voi every, chi khac la doi voi every thi tat ca phai pass, con some thi chi can 1 thang pass la retunrn
* true roi.
* */
console.log(arrayNumber.every(isTimesOfTen) + " --------- all element modular for 10");
console.log(arrayNumber.some(isTimesOfTen)  + " ---------some element modular for 10");


console.log("Example filter function !!");
/*
* Filter function se loc cac element trong array ma thoa man dieu kien nao do, va dua no ve thanh 1 array khac.
* Tu vi du tren kia, ta push them mot vai element de test doi voi kieu number, va lay ra cac so chia het cho 10.
*
* */


arrayNumber = arrayNumber.concat(20, 25, 50, 10, 30, 25, 65, 40, 20, 55);

console.log(arrayNumber);

function isTimesOfTen(element, index, array):boolean{
    return element % 10 == 0;
}

console.log("Array number before filter");
console.log(arrayNumber);
// list element chia het cho 10
let newArrayNumber = arrayNumber.filter(isTimesOfTen);

console.log("New Array number after filter");
console.log(newArrayNumber);


console.log("Example forEach function !!!");
/*
* call back function se duyet qua tung element cua array. cung chang co gi dac biet.
* */

function forEachElementInArray(element, index){
    console.log(['Element at index ', index, ' is : ', element].join(""));
}
arrayNumber.forEach(forEachElementInArray);



console.log("example for revert function !!!");
console.log(arrayString.reverse());

// revert array string to default.
arrayString.reverse();


console.log("Example of indexOf function !!!");
/*
* Function nay tra lai vi tri xuat hien dau tien cua phan tu trong array. Neu khong ton tai
* thi tra lai ket qua la -1.
* Function lastIndexOf cung tuong tu, chi la ket qua tra ve la vi tri cuoi cung xuat hien cua element.
* */

console.log(arrayString.indexOf("Khanh Tran"));


console.log("Example of map function !!!");
/*
* Lam thu phat xem sao !!!.
* */
let newArrayNumberAfterModTen = arrayNumber.map((element, index, array) =>{
   return element % 10;
});

console.log(newArrayNumberAfterModTen);


console.log("Example of pop function !!");
/*
* pop() Function nay lam 2 viec.
* 1. Remove phan tu cuoi cung cua array.
* 2. Tra ve phan tu do.
*
* Vi du function duoi kia, "Bo bo" la element cuoi cung. Vi vay ket qua cua ham pop la "Bo Bo" va array chi toi
* Ki Ki ma thoi (Vi Bo Bo da bi remove).
*
* Function nay khac cac function tren o cho: Cac function tren kia tra ve 1 array moi, va van giu nguyen gia tri cua
* array cu. Tuy nhien, cai thang nay lai update tren array cu.
*
* shift() function cung tuong tu nhu pop, nhung thay vi remove phan tu cuoi cung thi no remove phan tu dau tien.
*
* push(element) function thi dua them 1 element vao array. Co the xem no = voi concat(new_element).
* Tuy nhien phai phan biet, push va pop no la ham void, anh huong truc tiep toi array dang lam viec.
* Con concat thi tra lai 1 array hoan toan moi.
* Nen neu ko update lai gia tri cua array sau khi concat, thi no van ko thay doi.
*
* unshift(element)  nguoc lai voi push, push thi dua vao phan tu cuoi cung, con unshift thi lai dua vao phan tu dau tien.
* */

arrayString = arrayString.concat("Ki ki", "Bo bo");
console.log(arrayString);


let lastElementOfArray = arrayString.pop();
console.log("Get last element by pop function !!!");
console.log(lastElementOfArray);

console.log("Current array after remove last element!!!");
console.log(arrayString);


console.log("Example reduce function ");
/*
* Reduce function ap dung cho 2 gia tri cua mang va giam no ve con 1 gia tri duy nhat.
* Vi du ta se viet 1 callback function de return ve sum cua 2 so nham tinh tong cua array.
*
*  reduceRight cung tuong tu, nhung no hoat dong tu phai sang.
* */

function sumOfTwoNumberInArray(a : number, b: number): number{
    return a + b;
}

console.log(arrayNumber.reduce(sumOfTwoNumberInArray));


let simpleArray = new Array(5, 3, 2);

console.log(simpleArray.reduce((a : number, b: number):number => {
    console.log([a, " * 10 ^ ", b].join(""));
    return a * Math.pow(10, b);
}));

console.log(simpleArray);

console.log(simpleArray.reduceRight((a : number, b: number):number => {
    console.log([a, " * 10 ^ ", b].join(""));
    return Math.pow(a, b);
}));


console.log("Example of slice function !!!");
/*
* Slice function (begin , end) remove phan tu o vi tri xac dinh cua mang va return 1 mang moi.
* */

console.log(arrayString.join(", ") + " truoc khi slice");

console.log(arrayString.slice(1, 2).join(", ") + " lay phan tu tu index 1 --> 2");
console.log(arrayString.slice(1, 3).join(", ") + " lay phan tu tu index 1 --> 3");
console.log(arrayString.slice(-3, 3).join(", ") + " lay phan tu tu index -1 --> 3");



console.log("Example of sort function !!");
/*
* Sort function nhu ten goi cua no, su dung 1 callback function(a, b) de sort gia tri theo 1 thu tu nhat dinh
* va return new array
* Vi du :
* */


console.log("sort from least to greater " + arrayNumber.sort().join(", "));
console.log("sort from greater to least " + arrayNumber.sort((a:number, b:number):number =>{
    return b - a;
}).join(","));

console.log("sort by custom data");

let familyArray :{firstName, age}[]= new Array ({firstName : "Khanh Tran", age: 27}, {firstName : "Moi Moi", age: 24}, {firstName : "Cu oc", age: 3.5}, {firstName : "Be Huong", age: 0.5});
console.log(familyArray.sort((a : {firstName, age}, b: {firstName, age}) : number => {
    return b.age - a.age
}));


console.log("Array destructing !!!");
/*
* Noi nom na thi function nay se boc tach cac element trong array va gan no vao 1 cac bien tuong ung.
* Xem vi du
* */

let [farther, mother] = familyArray;
console.log("Father is " + farther.firstName);
console.log("Mother is " + mother.firstName);
let [, , cuOc, beHuong] = familyArray;

console.log("Cu Oc  is " + cuOc.firstName);
console.log("Be Huong is " + beHuong.firstName);


console.log("Tuple in type script !!!");
/*
* Ve co ban thi tuple la kieu array voi cac element co kieu du lieu khong dong nhat. No khac biet voi cai Array o cho khi
* khai bao Array, theo chuan es6 thi phai khai bao kieu du lieu cua element va bat buoc chi dc push dung kieu du lieu vao
* trong array.
* */