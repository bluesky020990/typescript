/* ----------------------- TYPE INFERENCE ----------------------------------------*/
/* Trong type script, o cac bai hoc truoc thi chung ta da lam quen voi kieu interface : dinh nghia mot kieu du lieu.
Vay, trong truong hop ma co nhieu object moi object la mot kieu du lieu khac nhau, thi chung ta nen chon interface nao de su dung?
Trong vi du sau, chung ta khai bao mot dong cac con vat nuoi trong nha
 */

(() => {
    class AnimalClazz {
        constructor (name : string){
            this.name = name;
        }
        name : string;
        eat : (food: string) => void;
        translate : () => void;
    }

    class DogClazz extends AnimalClazz{
        trongNha : () => void;

    }

    class CatClazz extends AnimalClazz{
        batChuot : () => void;
    }

    class ParrotClazz extends AnimalClazz{
        sing  : () => string;
    }

    class RatClazz extends AnimalClazz{
        anVung : () => string;
    }


    let petInTheHouse : Array<AnimalClazz> = [new DogClazz("PiPi"), new CatClazz("MiMi"), new ParrotClazz("Et Et"), new RatClazz("Chi Chi")];

    /* Trong vi du nay, de khai bao du lieu cho ca Pet In House, chung ta bat buoc phai su dung class la Animal boi vi chi co
    no moi du thong tin cho tat ca.
    * */


    /* ----------------------- TYPE COMPATIBILITY ----------------------------------------*/
    /* Cai khai niem nay thuc ra rat don gian, neu nhu ma ban co 1 doi tuong voi kieu du lieu la a, ban cung co 1 doi tuong khac
    voi kieu du lieu la b, nhung kieu du lieu cua a va b giong nhau, thi co the su dung chung cho nhau.
    Xem vi du ben duoi, CoordinatePoint va position
    * */

    interface coordinatePoint {
        x : number, y : number
    }

    interface positionPoint {
        x : number, y : number
    }

    function getRangeBetweenTwoPoint(pointA : coordinatePoint, pointB : coordinatePoint) : number  {
        return Math.sqrt((pointB.x - pointA.x) * (pointB.x - pointA.x) + (pointB.y - pointA.y) * (pointB.y - pointA.y));

    }

    // khai bao 2 object voi 2 du lieu khac nhau

    let pointA : coordinatePoint = {x: 10, y : 10};
    let pointB : positionPoint = {x: 100, y : 100};

    // va add chung vao function tren kia. De y, mac du function getRangeBetweenTwoPoint co tham so la pointA pointB deu la kieu
    // coordinatePoint, tuy nhien, vi 2 interface nay giong nhau nen co the su dung thay the nhau.
    let rangeBetweenTwoPoint : number = getRangeBetweenTwoPoint(pointA ,pointB);
    console.log(rangeBetweenTwoPoint);

    /*
    * Trong type script, moi interface thuong duoc xem xet ve mat ngu nghia, chu khong phai chi can cu tren cai ten cua chung.
    * Doi voi Java, function tren co the sai vi da truyen vao 2 doi tuong co kieu du lieu ko dung nhu kieu du lieu dc yeu cau.
    * Tuy nhien, trong ts, tat ca moi thu deu duoc quy ve cac thuoc tinh ben trong, chu ko quan tam toi cai ten cua chung.
    *
    * Vi vay, kieu A co phu hop (compatible with) kieu B neu nhu B co it nhat cac thanh vien/ thuoc tinh cua x. Xem vi du tiep
    **
    * */

    interface coordinate3DPoint {
       x : number, y : number, z : number
    }

    let pointC : coordinate3DPoint = {x : 100, y : 100, z : 100};
    let newRange : number = getRangeBetweenTwoPoint(pointA, pointC);
    console.log(newRange);


    /*  Mac du o day, kieu du lieu cua pointC khac voi pointB (vi no co them thuoc tinh / member z) tuy nhien, vi no co toan
    bo cac thuoc tinh cua coordinatePoint nen no van dc chap nhan.
    * */


    /* --------------------------------------- COMPARING TWO FUNCTION ---------------------------------------------*/
    /*  Da so sanh 2 object, gio ta chuyen sang so sanh 2 function nhe */

    let getTheSum = (a : number, b: number) : number => a + b;
    let getTheSumOfThreeNumber = (m: number, n : number, k: number): number => m + n + k;

    getTheSumOfThreeNumber = getTheSum;
    // getTheSum = getTheSumOfThreeNumber;

    /* Trong truong hop tren, ta khai bao 2 function. Function 1 chi co 2 tham so, function b thi co toi 3 tham so
    * Khi do b = a (vi b co nhieu tham so hon a, va 1, 2 giong a) trong khi do a == b (Error).
    * Tom lai, con thi giong cha, con cha thi ko the giong con dc.
    * */

    console.log(getTheSumOfThreeNumber(100, 200, 300));
    // ket qua cua function tren la 100 + 200 ( vi ta da gan function hien tai = getTheSum voi 2 tham so roi.

})();