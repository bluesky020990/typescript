/*
Trong type script, khi su dung in, thi tuc la ta dang lam viec voi key, con khi su dung of, thi dang lam viec voi value.
* */

/* ------------------------ REST PARAMETER -----------------------------------*/
// Trong typescript, dau "..." truoc ten bien khai bao rang do la 1 rest parameter
// Gia su ta khong biet duoc rang, se co toi da bao nhieu tam so o trong function se duoc goi, khi do, de lam viec voi no
// ta su dung kieu rest parameter

// Khi khao bao rest parammeter, toan bo cac bien truyen vao se duoc bien thanh 1 array va ta se de dang lam viec voi array do.

// Xem vi du
let displayColor = function (message, ...colors:string[]){
    for(let color of colors ){
        console.log(message + ": " + color);
    }
};

displayColor("this is first parameter", "red", "green", "blue");

// O day ta khong biet duoc la co bao nhieu colors se duoc truyen vao, vi vay ta su dung ...colors de dai dien cho mot mang cac gia tri
// nam trong do.

// Nhu vay, kieu cua rest parameter luon la array. Ghi nho dieu do.
/* ----------------------------------------------------------
return Object.assign({}, state, {
    todos: [
        ...state.todos,
        {
            text: action.text,
            completed: false
        }
    ]
});

----------------------------------------------------------- */
// Dao xua ko hieu cai nay, con gio thi hieu roi, cai TODOS kia no se tra ve 1 array gom cac object cu va them vao cai object moi.

// let displayColorAndShape = (message, ...shapeType:string[], ...colorArray:string[]) : void => { };

// Function tren kia bao loi vi rest parameter phai la last parameter trong function

let colorArray : string[] = ["blue"];
console.log(colorArray);

colorArray = [...colorArray, "green"];
console.log(colorArray);

colorArray = ["red", "orange", "yellow", ...colorArray];
console.log(colorArray);

/* --------------------------  SPREAD PARAMETER -------------------*/
// Doi voi REST, ta truyen vao danh sach cac phan tu, va ket qua tra ve la 1 mang.
// Doi voi SPREAD, ta truyen vao 1 mang, va ket qua tra ve la danh sach cac phan tu.
// Vi du o day, ta show cai arguments thi se thay


let mesage = "This is message of ";

displayColor(mesage, ...colorArray);

let displayLenghOfColors = function (mesage : string, ...colorArray){
    console.log(" Total size is " + colorArray.length);
}

displayLenghOfColors(mesage, ...colorArray);

// cai nay cha co gi khac cai kia ca, tom lai la ta hieu ... rest parameter la khai bao 1 mang object la dc.

/* -------------------------- BOC TACH ARRAY ---------------------*/

// Gia su ta co array color tren kia, gio ta muon lay cac phan tu o trong do ra, thi khi do ta se su dung nhu sau:

let [color1, color2, color3, , color4] = colorArray;

console.log("First color is " + color1);
console.log("Second color is " + color2);
console.log("Third color is " + color3);
console.log("Fourth color is " + color4);

// Trong truong hop nay, ta khai bao cac bein color1, ... color4, tuong ung voi cac phan tu so 1, 2, 3, 5 cua mang.
// Luu y ta de dau , , de biet la skip cai index o phan tu so 4 trong array.
// Neu index cua bien nam ngoai index cua mang (Out of Index ) thi se tra ve undefined.

// Vi du tiep theo, ta muon lay color dau tien, va cac color con lai gom thanh 1 mang, thi ta khai bao nhu sau:

let [_1stColor, ...remainColors] = colorArray;
console.log(" 1st color is " + _1stColor);
console.log(" remain color is " + remainColors);

/* -------------------------- BOC TACH OBJECT  ---------------------*/
// Tuong tu nhu chuc nang boc tach array, khi ta khai bao cac bien cung ten voi cac thuoc tinh cua doi tuong, thi ta se
// thu duoc danh sach cac bien voi du lieu tuong ung. Vi du

let moiMoiDoHoi = {
    mName : "Moi Moi", nickName : "Do Hoi", age : 24, job : {
        main : "accounter", sub : "nhong nheo"
    }
};

let {mName, nickName, job} = moiMoiDoHoi;

console.log (" Name is " + mName);
console.log (" NickName is " + nickName);
console.log (job);

// Luu y la ten cua bien phai cung ten voi thuoc tinh. Ma thoi khoi can nho vi no se bao loi lien a


/* --------------------------------- STRING TEMPLATE -----------------------------*/

// Gia su ta co mot chuoi voi format nhu sau :

// Tim kiem theo tu khoa ABCDEF hien thi NUMBER ket qua

let keyWord = "abcdef", total = 10;

let messageDisplay = `Tim kiem theo tu khoa ${keyWord} hien thi ${total} ket qua`;

console.log(messageDisplay);

// day, that la don gian va nhanh gon le phai ko. Nho la dau ` o ben canh so 1 nhe.

let mainClass = "container", titleDisplay : string = "Welcome to cai bai hoc vo van", contentDisplay : string = "" +
    "Co moi MOi la dua do hoi chap chap dien dien khung khung";

let contentDisplayHTML =
    `
    <div class="${mainClass}">
        <h1>${titleDisplay}</h1>
        <div>${contentDisplay}</div>
    </div>
    `;
console.log(contentDisplayHTML);
document.getElementsByClassName("container")[0].outerHTML = contentDisplayHTML;