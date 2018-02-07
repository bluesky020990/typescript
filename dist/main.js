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
/*
Khoi tao 1 class trong typescript

- Trong mot class chi co toi da 1 function constructor ma thoi.
- Neu muon su dung thi tot nhat la them mot vai function khac cho no nua


* */
var Sex;
/*
Khoi tao 1 class trong typescript

- Trong mot class chi co toi da 1 function constructor ma thoi.
- Neu muon su dung thi tot nhat la them mot vai function khac cho no nua


* */
(function (Sex) {
    Sex[Sex["Male"] = 0] = "Male";
    Sex[Sex["Female"] = 1] = "Female";
})(Sex || (Sex = {}));
;
var Person = (function () {
    function Person(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
    }
    /* Khong the khoi tao function nay vi toi da chi co 1 constructor cho 1 class
    constructor(name : string, {day : number, month: number, year: number}){

    }
    */
    Person.prototype.setBirthDay = function (_birthday) {
        this.birthDay = _birthday;
        this.age = 2018 - this.birthDay.year;
    };
    /* Khai bao static tuong tu ben java, phuong thuc nay la phuong thuc cua class khong phai cua object */
    Person.getAnimationType = function () {
        return "Human";
    };
    return Person;
}());
var maiMoi = new Person("Tieu Mai Moi Moi", 25, Sex.Female);
maiMoi.setBirthDay({ day: 30, month: 4, year: 1993 });
console.log(maiMoi);
console.log("Type of " + Person.getAnimationType());
/* --------------------------------- EXTEND FROM OTHER CLASS ---------------------------------
*
* O day tao 1 class Employee ke thua tu class Person o tren
* Employee co them thuoc tinh company, vi vay chung ta can overwrite lai constructor cua Person de dap ung yeu cau.
*
* Trong day, chung ta khai bao thuoc tinh salary la private. Khi viet trong TS file thi no se bao loi, tuy nhien, sau khi
* compiler ra file js thi no cha co van de gi ca. Tuc la cai nay no chi notify thoi con lai Moi Moi van xem dc luong cua anh B :(
* */
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, sex, company) {
        var _this = _super.call(this, name, age, sex) || this;
        _this.company = company;
        _this.salary = 14000000;
        _this.parent = [new Person("Nguyen Thi A", 54, Sex.Female), new Person("Tran Van B", 57, Sex.Male)];
        return _this;
    }
    Employee.prototype.showInformation = function () {
        console.log("My name is " + this.name + ". I'm " + this.age + " years old. " + " I'm working at " + this.company + " company." + " My salary is " + this.salary + " VND.");
        for (var i = 0; i < this.parent.length; i++) {
            var _parent = this.parent[i];
            if (_parent.sex == Sex.Male) {
                console.log("My father is " + _parent.name);
            }
            else {
                console.log("My mother is " + _parent.name);
            }
        }
    };
    Employee.prototype.getSalary = function () {
        return this.salary;
    };
    return Employee;
}(Person));
var khanhTranEmployee = new Employee("Khanh Tran", 28, Sex.Male, "Ban Vien");
khanhTranEmployee.showInformation();
try {
    moiMoiWantToViewSalaryOfB();
}
catch (e) {
}
function moiMoiWantToViewSalaryOfB() {
    console.log("Salary cua chong la bao nhieu ?" + khanhTranEmployee.getSalary());
}
var EmployeeWorkingDay = (function () {
    function EmployeeWorkingDay(person) {
        this.person = person;
    }
    EmployeeWorkingDay.prototype.morningTask = function () {
        console.log("Len uong cafe");
    };
    EmployeeWorkingDay.prototype.afterNoonTask = function () {
        console.log("Di uong cf roi ve nam ngu");
    };
    EmployeeWorkingDay.prototype.resultEndOfDay = function () {
        return "Noi voi sep la deadline mai moi xong dc";
    };
    EmployeeWorkingDay.prototype.reportTask = function () {
        console.log(this.resultEndOfDay());
    };
    return EmployeeWorkingDay;
}());
var todayTask = new EmployeeWorkingDay(khanhTranEmployee);
todayTask.morningTask();
todayTask.afterNoonTask();
todayTask.reportTask();
console.log("Vesion is " + "ABCDEF");
/* -------------------------------  USING CLASS AS INTERFACE ------------------------------------*/
var CoordinatePoint = (function () {
    function CoordinatePoint() {
    }
    return CoordinatePoint;
}());
var point3D = {
    x: 10,
    y: 10,
    z: 10
};
$('.container').html("Change content of element !!!!!");
/*----------------------------- FUNCTION EXAMPLE ---------------------------------------------*/
/*
    Function trong js co 2 dang, mot dang co function name, 1 dang la kieu anonymous (ex 1)

    De khai bao kieu du lieu tra ve cua function, sau dau (.... ) ta them : return type (ex 2)

 */
// Example 1. Function named and function anonymous
function add(x, y) {
    return x + y;
}
var a1 = function (x, y) { return x + y; };
var a2 = function (x, y) { return x + y; };
var a3 = function (x, y) { x + y; };
// Example 2 : Function with return data
/*        function_name            (param1, param2)          return type */
function calculatorSumOfTwoNumber(x, y) {
    return x + y;
}
/* Khai bao bien a4 la 1 function voi tham so dau vao la x, y va kieu du lieu tra ve la number*/
var a4 = function (x, y) { return x + y; };
/* Khai bao bien a3 la 1 function voi tham so dau vao la x, y va khong tra ve cai gi ca */
var a5 = function (x, y) { x + y - 100; };
// full
var myFunc = function (x, y) { return x + y; };
// sort
var myFunc2 = function (x, y) { return x + y; };
// - have error because "abc" is not a number
// myFunc2("abc", 100);
console.log("Total is " + myFunc2(100, 40));
/* FUNCTION AND PARAMETERS */
// Trong mot function, khi ta khai bao so luong tham so, thi cac function goi no phai truyen vao day du cac tham so. Vi du tren
// neu nhu add function dc goi ma chi co 1 tham so thi no se bao loi lien.
// Tuy nhien, trong mot vai truong hop, ta muon khai bao rang mot tham so co the co hoac khong, khi do ta su dung cau ? sau ten tham so.
// Cach su dung nay cung tuong tu nhu trong interface
var calculatorSalary = function (x, r, y) { return x * r + (y != null ? y : 0); };
console.log(calculatorSalary(600, 22));
console.log(calculatorSalary(1000, 22, null));
// Mot vai truong hop, ta muon khai bao mot gia tri mac dinh nao do cho tham so, neu no vang mat trong function. Cung tu vi du tren
var calculatorSalaryOfMonth = function (s, d, b) {
    if (b === void 0) { b = 0; }
    return s * d + b;
};
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
function buildName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var buildNameFun = buildName;
console.log(buildNameFun("Moi Moi", "dien", "khung", "do hoi", "than kinh", "chap chap"));
// Xem trong vi du tren, ta khong biet chinh xac co bao nhieu tham so o sau function do, vi vay, chung ta su dung dau ...
// de khai bao 1 bien la rest parameter. Rest parameter nay co the la mot array voi so luong bao nhieu tuy y.
// Luu y, ...restOfName luon la mot array.
function generateConfig(dataName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    var result = {
        dataName: dataName,
        array: restOfName
    };
    return result;
}
var config = generateConfig("Moi Moi", "khung", "do hoi", "than kinh", "chap chap");
var message = "About ve " + config.dataName + "." + config.dataName;
for (var i = 0; i < config.array.length; i++) {
    message += " " + config.array[i];
}
console.log(message);
//-------------------------------- THIS IN FUNCTION ------------------------------------- //
// Trong javascript, "this" la mot bien duoc tao ra khi mot function duoc goi. Do do, ngu canh cua this luon la function
// hien tai.
var makeDuiDeNuong = {
    status: 0,
    object: "Mot cai dui de to",
    nuongDuiDe: function () {
        console.log(this.status == 0 ? "Dui de dang dc nuong" : (this.status == 1 ? "Dui de chay roi !" : "Dui de thom qua !!!"));
    },
    quayDuiDe: function () {
        console.log("Quay deu quay deu quay deu.");
        // this.status = 2;
        return function () {
            this.status = 2;
        };
    }, quayDuiDeVongVong: function () {
        var _this = this;
        return function () {
            console.log("Quay vong vong la quay vong vong");
            _this.status = 2;
        };
    }
};
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
function checkDataOfObject(x) {
    if (typeof x == "object") {
        return "You enter the object";
    }
    else if (typeof x == "string") {
        return x + "_string";
    }
    else if (typeof x == "number") {
        return x * 100;
    }
    else {
        return x;
    }
}
console.log(checkDataOfObject({ x: 100, y: 100 }));
console.log(checkDataOfObject("Moi Moi"));
console.log(checkDataOfObject(20));
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
/* ----------------------- TYPE INFERENCE ----------------------------------------*/
/* Trong type script, o cac bai hoc truoc thi chung ta da lam quen voi kieu interface : dinh nghia mot kieu du lieu.
Vay, trong truong hop ma co nhieu object moi object la mot kieu du lieu khac nhau, thi chung ta nen chon interface nao de su dung?
Trong vi du sau, chung ta khai bao mot dong cac con vat nuoi trong nha
 */
(function () {
    var AnimalClazz = (function () {
        function AnimalClazz(name) {
            this.name = name;
        }
        return AnimalClazz;
    }());
    var DogClazz = (function (_super) {
        __extends(DogClazz, _super);
        function DogClazz() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return DogClazz;
    }(AnimalClazz));
    var CatClazz = (function (_super) {
        __extends(CatClazz, _super);
        function CatClazz() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return CatClazz;
    }(AnimalClazz));
    var ParrotClazz = (function (_super) {
        __extends(ParrotClazz, _super);
        function ParrotClazz() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return ParrotClazz;
    }(AnimalClazz));
    var RatClazz = (function (_super) {
        __extends(RatClazz, _super);
        function RatClazz() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return RatClazz;
    }(AnimalClazz));
    var petInTheHouse = [new DogClazz("PiPi"), new CatClazz("MiMi"), new ParrotClazz("Et Et"), new RatClazz("Chi Chi")];
    function getRangeBetweenTwoPoint(pointA, pointB) {
        return Math.sqrt((pointB.x - pointA.x) * (pointB.x - pointA.x) + (pointB.y - pointA.y) * (pointB.y - pointA.y));
    }
    // khai bao 2 object voi 2 du lieu khac nhau
    var pointA = { x: 10, y: 10 };
    var pointB = { x: 100, y: 100 };
    // va add chung vao function tren kia. De y, mac du function getRangeBetweenTwoPoint co tham so la pointA pointB deu la kieu
    // coordinatePoint, tuy nhien, vi 2 interface nay giong nhau nen co the su dung thay the nhau.
    var rangeBetweenTwoPoint = getRangeBetweenTwoPoint(pointA, pointB);
    console.log(rangeBetweenTwoPoint);
    var pointC = { x: 100, y: 100, z: 100 };
    var newRange = getRangeBetweenTwoPoint(pointA, pointC);
    console.log(newRange);
    /*  Mac du o day, kieu du lieu cua pointC khac voi pointB (vi no co them thuoc tinh / member z) tuy nhien, vi no co toan
    bo cac thuoc tinh cua coordinatePoint nen no van dc chap nhan.
    * */
    /* --------------------------------------- COMPARING TWO FUNCTION ---------------------------------------------*/
    /*  Da so sanh 2 object, gio ta chuyen sang so sanh 2 function nhe */
    var getTheSum = function (a, b) { return a + b; };
    var getTheSumOfThreeNumber = function (m, n, k) { return m + n + k; };
    getTheSumOfThreeNumber = getTheSum;
    // getTheSum = getTheSumOfThreeNumber;
    /* Trong truong hop tren, ta khai bao 2 function. Function 1 chi co 2 tham so, function b thi co toi 3 tham so
    * Khi do b = a (vi b co nhieu tham so hon a, va 1, 2 giong a) trong khi do a == b (Error).
    * Tom lai, con thi giong cha, con cha thi ko the giong con dc.
    * */
    console.log(getTheSumOfThreeNumber(100, 200, 300));
    // ket qua cua function tren la 100 + 200 ( vi ta da gan function hien tai = getTheSum voi 2 tham so roi.
})();
//# sourceMappingURL=main.js.map