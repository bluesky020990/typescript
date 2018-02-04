Trong typescript, chung ta co cach de khai bao mot kieu du lieu require

Noi hoi kho hieu, don gian hon, neu nhu ban muon xay dung 1 function createArray voi tham so dau vao la n phan tu,
n la number, thi de ngan chan truong hop goi function createArray("abcdef") thi minh yeu cau rang tham so 
truyen vao phai la number

Khi do chung ta khai bao function tren duoi dang:

function createArray(lenght: number){
    console.log("Create an array with " + lenght + " element !!!");
}

Trong truong hop khac, neu chung ta muon khai bao kieu du lieu cho tham so dau vao la mot object voi cac thuoc tinh
dac biet, khi ay chung ta phai su dung Interface.

Vay, interface la gi?

Interface don gian duoc hieu la mot khieu khai bao gia tri ma function/ hoac variable can tuan thu theo.

Vi du tuong tu trong java :

public class PersonDTO {
    String firstName;
    String lastName;
    Integer age;
    
    .......
}

updatePerson(PersonDTO person){
    saving(person);
}


Thi trong type script chung ta khai bao mot interface de quy dinh kieu du lieu PersonDTO

interface InterfacePerson {
    firstName : string,
    lastName: string,
    age: number
}

function updatePerson(person : InterfacePerson){
    saving(person);
} 


let moiMoi : InterfacePerson = {
    firstName : "Moi Moi",
    lastName : " Do Hoi",
    age : 25
};

updatePerson(moiMoi);

hoac cung co the quy dinh viec tao ra 1 object person truoc


