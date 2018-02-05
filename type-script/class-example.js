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
$(document).ready(function () {
    $('.container').html("Change content of element by jquery!!!");
});
