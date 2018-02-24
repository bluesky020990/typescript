module FunctionExample{
    // version 1.0

    function getSumOfTwoOrMoreNumber(number1:number, number2:number, ...numberArray:Array<number>) : number{
        let total = 0;
        total += number1;
        total += number2;

        for(let _number of numberArray){
            total += _number;
        }

        return total;
    }

    let GetSumOfListNumber = (number1: number, number2: number, ...numberArray) : number => {
        let total = 0;
        total += number1;
        total += number2;

        for(let _number of numberArray){
            total += _number;
        }

        return total;
    };

    export default class GenerateUserInformation {
        firstName : string;
        lastName : string;
        userName : string;
        password : string;
        address : string;

        constructor (_firstName:string, _lastName : string, _userName : string, _password:string, _address: string){
            this.firstName = _firstName;
            this.lastName = _lastName;
            this.userName = _userName;
            this.password = _password;
            this.address = _address;
        }

        displayUserInformation = (): string => {
            return this.firstName + " " + this.lastName;
        };

        showUserAccount = (): string => {
            return `Username: ${this.userName}
            Password: ${this.password}`
        };

        showAddress = (): string => {
            return this.address;
        };
    };
}

let functionExample = "FunctionExample";



