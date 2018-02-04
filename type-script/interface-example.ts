/* -------------------------- I. SU DUNG INTERFACE DE KHAI BAO MOT KIEU DU LIEU ------------------------------------*/
function createArray(lenght: number){
    console.log("Create an array with " + lenght + " element !!!");
}

// createArray("abcd"); // invalid
createArray(12);

// 1. Khai bao 1 interface voi 3 thuoc tinh bat buoc
interface PersonInformation {
    firstName : string,
    lastName : string,
    age : number
}

//2. Tao 1 object implement data require cua interface nay

let person_1 : PersonInformation = {
    firstName : "Khanh",
    lastName : "Tran",
    age : 28
};

console.log(person_1.firstName + " " + person_1.lastName + " is " + person_1.age + " years old.");

//2. Khai bao 1 interface voi mot vai thuoc tinh khong bat buoc (age la thuoc tinh khong bat buoc, co ? o truoc)
interface BirthDayTye {
    day : number,
    month: number,
    year: number
}

interface  PersonInformationMissing {
    firstName : string,
    lastName : string,
    age ? : number,
    birthDay : BirthDayTye

}

let person_2 : PersonInformationMissing = {
    firstName : "Moi Moi",
    lastName : " Do Hoi",
    birthDay : {day: 30, month: 4, year: 1993}
};

console.log(person_2.firstName + " " + person_2.lastName + " is " + person_2.age + " years old.");

console.log(person_2.firstName + " " + person_2.lastName + " is " + (2018 - person_2.birthDay.year) + " years old. She was born in " + person_2.birthDay.year + ".");



// Khai bao function createSquare, voi kieu du lieu tra ve duoi dang object gom 2 thuoc tinh : { color: string; area: number }

interface SquareConfig {
    color?: string;
    width?: number;
}

//       name         variable : typeObject    : rerult type of the function ---> (always return a object with attribute like that)
function createSquare(config   : SquareConfig) : { color: string; area: number } {
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = createSquare({color: "black"});

console.log(mySquare);



// Khai bao function Search voi tham so dau vao va quy dinh kieu du lieu tra ve la :boolean
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;

    // Code se bao loi neu nhu ko return result > -1  (Vi no da chi dinh ro kieu du lieu tra ve phai la boolean o tren kia

};



// Khai bao 1 interface trong do, dua cac gia tri tu kieu string ve thanh number het.
// Vi vay, viec khai bao name : string se bao loi, vi kieu du lieu tra ve bat buoc phai la number
interface NumberDictionary {
    [index: string]: number;
    length: number;    // ok, length is a number
    // name: string;      // error, the type of 'name' is not a subtype of the indexer
    name : number
}

let numberDictionaryExp : NumberDictionary = {
    length: 100,
    name: 1000
};


// -----> nhu vay, trong truong hop nay, ta su dung Interface nhu 1 loai khai bao kieu du lieu vay.

// Su dung readonly de khai bao mot interface, trong do quy dinh mot kieu du lieu khong the thay the duoc

// Trong mot vai truong hop, chung ta muon truyen vao 1 object, nhung khong cho phep thay doi bat cu gia tri nao cua object
// do, thi can su dung thuoc tinh readOnly de khai bao. Vi du:

interface PersonInfo{
    name : string,
    readonly age : number
}

let moiMoiDoHoi : PersonInfo = {
    name : "Moi Moi",
    age : 20
};

// moiMoiDoHoi.age = 100; <--- bao loi vi age dc khai bao la readonly nen ko the thay doi dc
moiMoiDoHoi.name = "Moi Moi de thuong";

console.log(moiMoiDoHoi.name + " and " + moiMoiDoHoi.age + " years old.");



/* -------------------------- II. SU DUNG INTERFACE CHO CLASS -----------------------------------------*/
// Gia su trong truong hop nay ta khai bao mot interface Clock, voi duy nhat mot properties la currentTime voi object type la Date.now()
// Neu trong class Clock ma khong implement kieu du lieu nay thi no se bao loi.

// Vi du 1
interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime: Date; // <-- have error when un-declare the properties.
    hour : number;
    minute : number;

    constructor(h: number, m: number) {
        this.hour = h;
        this.minute = m;
    }
}

let currentTime = new Clock(20, 41);
console.log(currentTime);


// Vi du 2:
// Khai bao mot interface la animation Action voi 3 phuong thuc la eat, talk va run
interface AnimalAction {
    eat (): void,

    talk (): string,

    run (): void,

    giveBirth () : any
}

// Tao 1 class dog implement interface tren, khi do, bat cu class nao ma ko implement du cac function tren va khai bao kieu du
// lieu tra ve phu hop thi deu bao loi
class Animal {
    name: string;
    birthday: { day: number, month: number, year: number };
}

class Dog implements AnimalAction {
    name: string;

    constructor(_name: string) {
        this.name = _name;
    }

    eat = function () {
        console.log(this.name + " an xuong");
    };

    talk = function () {
        return " keu Gau Gau";
    };

    run = function () {
        console.log(this.name + " chay bang 4 chan");
    };

    giveBirth = function () {
        return new Dog("son of " + this.name);
    }
}

class Cat implements AnimalAction {
    eat = function () {
        console.log(this.name + " an chuot");
    };
    talk = function () {
        return "keu meo meo";
    };

    run = function () {
        console.log(this.name + " chay rat nhanh");
    };
    giveBirth = function () {
        return new Cat()
    }
}

let moiMoi = new Dog("Moi Moi");
moiMoi.run();
moiMoi.eat();
console.log(moiMoi.name + " " + moiMoi.talk());

let child = moiMoi.giveBirth();
console.log(child);

/* -------------------------- III. INTERFACE EXTEND INTERFACE -----------------------------------------*/
// Khai bao 1 interface cho Bird
interface BirdAnimation extends  AnimalAction{
    fly (): void,
}
// tao 1 class Bird implement interface do

class Bird implements BirdAnimation{
    name: string;

    constructor(_name: string) {

        this.name = _name;
    }
    eat = function (){

    };
    talk = function (){
        return "chip chip";
    };

    run = function () {
        console.log("The bird not run. ");
    };

    giveBirth = function () {

    };

    fly = function (){
        console.log("The bird is flying!!");
    };


}

let khanhTran = new Bird("Phonix");
khanhTran.run();
khanhTran.eat();
khanhTran.fly();


/* -------------------------- III. INTERFACE EXTEND CLASS -----------------------------------------*/

// Khai bao 1 class control
class Control {
    private state: any;
}

// khai bao 1 interface implement class tren
interface SelectableControl extends Control {
    select(): void;
}

// khai bao 1 class extend tu class tren va implement cai interface kia
class Button extends Control implements SelectableControl {
    select() { }
}

// khai bao 1 class extend tu class tren ma ko can implement interface do
class TextBox extends Control {
    select() { }
}

// khai bao 1 class implement interface tren. Trong truong hop class ko co properties la state, no se bao loi
// Vi cai interface extend tu cai class Control, nen cai class implement no cung can phai extend tu class Control

// Error: Property 'state' is missing in type 'Image'.
// class Image implements SelectableControl {
//     select() { }
// }
//
//
// class LocationExtendIncorrectly implements SelectableControl {
//     private state = "abcdef";
//
//     select = function() {
//
//     }
// }

class LocationExtendCorrectly extends  Control implements SelectableControl {

    select = function() {

    }
}