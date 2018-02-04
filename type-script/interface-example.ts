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

function createSquare(config: SquareConfig) : { color: string; area: number } {
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


/* -------------------------- II. SU DUNG INTERFACE DE KHAI BAO CAC REQUIRE FUNCTION CHO CLASS-------------------------*/

