/*
Khoi tao 1 class trong typescript

- Trong mot class chi co toi da 1 function constructor ma thoi.
- Neu muon su dung thi tot nhat la them mot vai function khac cho no nua


* */
enum Sex {Male, Female};


interface  BirthDayType{
    day : number,
    month : number,
    year : number
}

class Person{
    name : string;
    age : number;
    sex : Sex;
    birthDay : BirthDayType;
    protected parent : Person [];

    constructor(name : string, age : number, sex : Sex){
        this.name = name;
        this.age = age;
        this.sex = sex;
    }


    /* Khong the khoi tao function nay vi toi da chi co 1 constructor cho 1 class
    constructor(name : string, {day : number, month: number, year: number}){

    }
    */

    setBirthDay (_birthday: BirthDayType){
        this.birthDay = _birthday;
        this.age = 2018 - this.birthDay.year;
    }


    /* Khai bao static tuong tu ben java, phuong thuc nay la phuong thuc cua class khong phai cua object */
    static getAnimationType = function (){
        return "Human";
    }
}

let maiMoi = new Person("Tieu Mai Moi Moi", 25, Sex.Female);
maiMoi.setBirthDay({day: 30, month: 4, year: 1993});

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

class Employee extends Person{
    company : string;
    private salary : number;

    constructor(name : string, age : number, sex: Sex, company : string){
        super(name, age, sex);
        this.company = company;
        this.salary = 14000000;
        this.parent = [new Person("Nguyen Thi A", 54, Sex.Female), new Person("Tran Van B", 57, Sex.Male)];
    }

    showInformation (){
        console.log("My name is " + this.name + ". I'm " + this.age + " years old. " + " I'm working at " + this.company + " company." + " My salary is " + this.salary + " VND.");

        for(let i = 0; i < this.parent.length; i++){
            let _parent = this.parent[i];
            if(_parent.sex == Sex.Male){
                console.log("My father is " + _parent.name);
            } else {
                console.log("My mother is " + _parent.name);
            }
        }
    }

    getSalary (){
        return this.salary;
    }


}

let khanhTranEmployee = new Employee("Khanh Tran", 28, Sex.Male, "Ban Vien");
khanhTranEmployee.showInformation();


try{
    moiMoiWantToViewSalaryOfB();
}catch(e){

}

function moiMoiWantToViewSalaryOfB(){
    console.log("Salary cua chong la bao nhieu ?" + khanhTranEmployee.getSalary());
}

/* --------------------------------- IMPLEMENT INTERFACE ---------------------------------
*  Xem lai bai interface luc truoc de biet them chi tiet
* */

interface  WorkingDayTask {
    morningTask () : void,
    afterNoonTask() : void,
    resultEndOfDay() : string
}

class EmployeeWorkingDay implements WorkingDayTask{
    person : Person;

    constructor(person : Person){
        this.person = person;
    }

    morningTask (){
        console.log("Len uong cafe");
    }
    afterNoonTask (){
        console.log("Di uong cf roi ve nam ngu");
    }

    resultEndOfDay(){
        return "Noi voi sep la deadline mai moi xong dc";
    }

    reportTask (){
        console.log(this.resultEndOfDay());
    }
}

let todayTask = new EmployeeWorkingDay(khanhTranEmployee);

todayTask.morningTask();
todayTask.afterNoonTask();
todayTask.reportTask();

console.log("Vesion is " + "ABCDEF");


/* -------------------------------  USING CLASS AS INTERFACE ------------------------------------*/

class CoordinatePoint {
    x : number;
    y:  number;
}

interface  Point3D extends CoordinatePoint{
    z : number;
}

let point3D : Point3D = {
    x : 10,
    y: 10,
    z : 10
}


$('.container').html("Change content of element !!!!!");