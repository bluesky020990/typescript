var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* -------------------------- I. SU DUNG INTERFACE DE KHAI BAO MOT KIEU DU LIEU ------------------------------------*/
function createArray(lenght) {
    console.log("Create an array with " + lenght + " element !!!");
}
// createArray("abcd"); // invalid
createArray(12);
//2. Tao 1 object implement data require cua interface nay
var person_1 = {
    firstName: "Khanh",
    lastName: "Tran",
    age: 28
};
console.log(person_1.firstName + " " + person_1.lastName + " is " + person_1.age + " years old.");
var person_2 = {
    firstName: "Moi Moi",
    lastName: " Do Hoi",
    birthDay: { day: 30, month: 4, year: 1993 }
};
console.log(person_2.firstName + " " + person_2.lastName + " is " + person_2.age + " years old.");
console.log(person_2.firstName + " " + person_2.lastName + " is " + (2018 - person_2.birthDay.year) + " years old. She was born in " + person_2.birthDay.year + ".");
//       name         variable : typeObject    : rerult type of the function ---> (always return a object with attribute like that)
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: "black" });
console.log(mySquare);
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
    // Code se bao loi neu nhu ko return result > -1  (Vi no da chi dinh ro kieu du lieu tra ve phai la boolean o tren kia
};
var numberDictionaryExp = {
    length: 100,
    name: 1000
};
var moiMoiDoHoi = {
    name: "Moi Moi",
    age: 20
};
// moiMoiDoHoi.age = 100; <--- bao loi vi age dc khai bao la readonly nen ko the thay doi dc
moiMoiDoHoi.name = "Moi Moi de thuong";
console.log(moiMoiDoHoi.name + " and " + moiMoiDoHoi.age + " years old.");
var Clock = (function () {
    function Clock(h, m) {
        this.hour = h;
        this.minute = m;
    }
    return Clock;
}());
var currentTime = new Clock(20, 41);
console.log(currentTime);
// Tao 1 class dog implement interface tren, khi do, bat cu class nao ma ko implement du cac function tren va khai bao kieu du
// lieu tra ve phu hop thi deu bao loi
var Animal = (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = (function () {
    function Dog(_name) {
        this.eat = function () {
            console.log(this.name + " an xuong");
        };
        this.talk = function () {
            return " keu Gau Gau";
        };
        this.run = function () {
            console.log(this.name + " chay bang 4 chan");
        };
        this.giveBirth = function () {
            return new Dog("son of " + this.name);
        };
        this.name = _name;
    }
    return Dog;
}());
var Cat = (function () {
    function Cat() {
        this.eat = function () {
            console.log(this.name + " an chuot");
        };
        this.talk = function () {
            return "keu meo meo";
        };
        this.run = function () {
            console.log(this.name + " chay rat nhanh");
        };
        this.giveBirth = function () {
            return new Cat();
        };
    }
    return Cat;
}());
var moiMoi = new Dog("Moi Moi");
moiMoi.run();
moiMoi.eat();
console.log(moiMoi.name + " " + moiMoi.talk());
var child = moiMoi.giveBirth();
console.log(child);
// tao 1 class Bird implement interface do
var Bird = (function () {
    function Bird(_name) {
        this.eat = function () {
        };
        this.talk = function () {
            return "chip chip";
        };
        this.run = function () {
            console.log("The bird not run. ");
        };
        this.giveBirth = function () {
        };
        this.fly = function () {
            console.log("The bird is flying!!");
        };
        this.name = _name;
    }
    return Bird;
}());
var khanhTran = new Bird("Phonix");
khanhTran.run();
khanhTran.eat();
khanhTran.fly();
/* -------------------------- III. INTERFACE EXTEND CLASS -----------------------------------------*/
// Khai bao 1 class control
var Control = (function () {
    function Control() {
    }
    return Control;
}());
// khai bao 1 class extend tu class tren va implement cai interface kia
var Button = (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () { };
    return Button;
}(Control));
// khai bao 1 class extend tu class tren ma ko can implement interface do
var TextBox = (function (_super) {
    __extends(TextBox, _super);
    function TextBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextBox.prototype.select = function () { };
    return TextBox;
}(Control));
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
var LocationExtendCorrectly = (function (_super) {
    __extends(LocationExtendCorrectly, _super);
    function LocationExtendCorrectly() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.select = function () {
        };
        return _this;
    }
    return LocationExtendCorrectly;
}(Control));
