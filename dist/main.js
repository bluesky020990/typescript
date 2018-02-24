var FunctionExample;
(function (FunctionExample) {
    // version 1.0
    function getSumOfTwoOrMoreNumber(number1, number2) {
        var numberArray = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            numberArray[_i - 2] = arguments[_i];
        }
        var total = 0;
        total += number1;
        total += number2;
        for (var _a = 0, numberArray_1 = numberArray; _a < numberArray_1.length; _a++) {
            var _number = numberArray_1[_a];
            total += _number;
        }
        return total;
    }
    var GetSumOfListNumber = function (number1, number2) {
        var numberArray = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            numberArray[_i - 2] = arguments[_i];
        }
        var total = 0;
        total += number1;
        total += number2;
        for (var _a = 0, numberArray_2 = numberArray; _a < numberArray_2.length; _a++) {
            var _number = numberArray_2[_a];
            total += _number;
        }
        return total;
    };
    var GenerateUserInformation = (function () {
        function GenerateUserInformation(_firstName, _lastName, _userName, _password, _address) {
            var _this = this;
            this.displayUserInformation = function () {
                return _this.firstName + " " + _this.lastName;
            };
            this.showUserAccount = function () {
                return "Username: " + _this.userName + "\n            Password: " + _this.password;
            };
            this.showAddress = function () {
                return _this.address;
            };
            this.firstName = _firstName;
            this.lastName = _lastName;
            this.userName = _userName;
            this.password = _password;
            this.address = _address;
        }
        return GenerateUserInformation;
    }());
    FunctionExample.GenerateUserInformation = GenerateUserInformation;
    ;
})(FunctionExample || (FunctionExample = {}));
var functionExample = "FunctionExample";
System.register("main", ["./practice/function"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var function_1;
    return {
        setters: [
            function (function_1_1) {
                function_1 = function_1_1;
            }
        ],
        execute: function () {
            console.log(function_1.functionExample);
            // let user1Information = new functionExample.GenerateUserInformation("Khanh", "Tran", "Khanh_Tran", "123456", "Le Thuy Quang Binh");
            //
            // console.log(user1Information.displayUserInformation());
            // console.log(user1Information.showUserAccount());
            // console.log(user1Information.showAddress()); 
        }
    };
});
//# sourceMappingURL=main.js.map