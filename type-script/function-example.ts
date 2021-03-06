/*----------------------------- FUNCTION EXAMPLE ---------------------------------------------*/

/*
    Function trong js co 2 dang, mot dang co function name, 1 dang la kieu anonymous (ex 1)

    De khai bao kieu du lieu tra ve cua function, sau dau (.... ) ta them : return type (ex 2)

 */

// Example 1. Function named and function anonymous
function add(x:number, y:number) {
    return x + y;
}

let a1 = function(x : number, y: number) {return x + y};
let a2 = (x: number, y: number) => x + y;
let a3 = (x: number, y : number) => {x + y};


// Example 2 : Function with return data
/*        function_name            (param1, param2)          return type */
function calculatorSumOfTwoNumber (x : number, y : number) : number{
    return x + y;
}

/* Khai bao bien a4 la 1 function voi tham so dau vao la x, y va kieu du lieu tra ve la number*/
let a4: (x: number, y: number) => number = function(x : number, y : number):number {return x + y};

/* Khai bao bien a3 la 1 function voi tham so dau vao la x, y va khong tra ve cai gi ca */
let a5: (x:number, y:number) => void = function(x:number, y: number){ x + y - 100};

// full
let myFunc = function(x:number, y: number) : number {return x + y};

// sort
let myFunc2 : (baseValue:number, increasement : number) => number = function(x, y){ return x + y};


// - have error because "abc" is not a number
// myFunc2("abc", 100);

console.log("Total is " + myFunc2(100, 40));


/* FUNCTION AND PARAMETERS */
// Trong mot function, khi ta khai bao so luong tham so, thi cac function goi no phai truyen vao day du cac tham so. Vi du tren
// neu nhu add function dc goi ma chi co 1 tham so thi no se bao loi lien.

// Tuy nhien, trong mot vai truong hop, ta muon khai bao rang mot tham so co the co hoac khong, khi do ta su dung cau ? sau ten tham so.
// Cach su dung nay cung tuong tu nhu trong interface

let calculatorSalary :(salaryEachDay : number, totalDay:number,  bonus? : number) => number = function(x, r, y){ return x * r + (y != null ? y : 0)};

console.log(calculatorSalary(600, 22));

console.log(calculatorSalary(1000, 22, null));

// Mot vai truong hop, ta muon khai bao mot gia tri mac dinh nao do cho tham so, neu no vang mat trong function. Cung tu vi du tren
let calculatorSalaryOfMonth : (salaryEachDay : number, workDay : number, bonus?: number) => number = function(s, d, b = 0){ return s * d + b};

console.log(" calculatorSalaryOfMonth " + calculatorSalaryOfMonth(600, 22));

// Trong function tren, ta khai bao gia tri bien b la khong require, va set = 0 neu empty

/* ------------------------------------ REST PARAMETER ----------------------------------------*/
// Day la cai hay nhat cua js
// Các tham số còn lại
// Các tham số bắt buộc, tùy chọn và mặc định đều có một điểm chung: họ nói về một tham số tại một thời điểm.
// Đôi khi, bạn muốn làm việc với nhiều tham số như một nhóm, hoặc bạn có thể không biết có bao nhiêu tham số một chức năng cuối cùng sẽ có.
// Trong JavaScript, bạn có thể làm việc với các đối số trực tiếp sử dụng biến đối số có thể nhìn thấy bên trong mỗi cơ thể chức năng.
//
//     Trong TypeScript, bạn có thể thu thập các đối số này với nhau thành một biến:
function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
}

let buildNameFun: (fname: string, ...rest: string[]) => string = buildName;

console.log(buildNameFun("Moi Moi", "dien", "khung", "do hoi", "than kinh", "chap chap"));

// Xem trong vi du tren, ta khong biet chinh xac co bao nhieu tham so o sau function do, vi vay, chung ta su dung dau ...
// de khai bao 1 bien la rest parameter. Rest parameter nay co the la mot array voi so luong bao nhieu tuy y.
// Luu y, ...restOfName luon la mot array.

function generateConfig(dataName : string, ...restOfName : string[]){
    let result = {
        dataName : dataName,
        array : restOfName
    };

    return result;
}

let config = generateConfig("Moi Moi", "khung", "do hoi", "than kinh", "chap chap");
let message = "About ve " + config.dataName + "." + config.dataName;
for(let i = 0; i < config.array.length; i++){
    message += " " + config.array[i];
}
console.log(message);

//-------------------------------- THIS IN FUNCTION ------------------------------------- //
// Trong javascript, "this" la mot bien duoc tao ra khi mot function duoc goi. Do do, ngu canh cua this luon la function
// hien tai.


let makeDuiDeNuong = {
    status : 0, // 0 la bat dau nuong
    object : "Mot cai dui de to",
    nuongDuiDe : function(){
        console.log(this.status == 0 ? "Dui de dang dc nuong" : (this.status == 1 ? "Dui de chay roi !" : "Dui de thom qua !!!"));
    },
    quayDuiDe : function (){
        console.log("Quay deu quay deu quay deu.");
        // this.status = 2;

        return function(){
            this.status = 2;
        }
    }, quayDuiDeVongVong : function (){
        return () =>{
            console.log("Quay vong vong la quay vong vong");
            this.status = 2;
        }
    }
}

// Trong vi du tren, this (trong function nuongDuiDe), dang o trong object, nen ngu canh cua no la object

// makeDuiDeNuong.nuongDuiDe();


// Trong function quay dui de, this luc nay khong con la ngu canh o trong object nua, ma no da trong ngu canh cua anonymous function
// kia roi. Vi vay ma this.status = 2 khong co y nghia gi va

// makeDuiDeNuong.quayDuiDe();
// makeDuiDeNuong.nuongDuiDe();

// Gio hay su dung arrow function cho cai nay thu xem
makeDuiDeNuong.quayDuiDeVongVong()();
makeDuiDeNuong.nuongDuiDe();

// viec su dung arrow dong nghia voi viec ta khai bao this dang o function hien tai. Xem trong cai js generate ra thi se hieu.

// ---------------------------- OVERLOAD FUNCTION -------------------------------- //
function checkDataOfObject (x: any):any{
    if(typeof x == "object"){
        return "You enter the object"
    } else if (typeof x == "string"){
        return x + "_string";
    } else if (typeof x == "number"){
        return x * 100;
    } else {
        return x;
    }
}

console.log(checkDataOfObject({x : 100, y : 100}));
console.log(checkDataOfObject("Moi Moi"));
console.log(checkDataOfObject(20));