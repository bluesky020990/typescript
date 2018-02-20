/*
* De khai bao mot module, dau tien ta khoi tao module do nhu sau :
* su dung tu khoa module
* */
System.register("export-module-template", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var NumberUtils, numberUtilsModule;
    return {
        setters: [],
        execute: function () {/*
            * De khai bao mot module, dau tien ta khoi tao module do nhu sau :
            * su dung tu khoa module
            * */
            (function (NumberUtils) {
                // sau do export class tu trong module do ra
                var Number = (function () {
                    function Number() {
                        this.plus = function (number1, number2) {
                            return number1 + number2;
                        };
                        this.minus = function (number1, number2) {
                            return number1 - number2;
                        };
                    }
                    return Number;
                }());
                NumberUtils.Number = Number;
            })(NumberUtils || (NumberUtils = {}));
            // va co the su dung no mot cach de dang. Luc nay, class Number dc compiler thanh 1 function
            // ben trong module tren nen se ko bi trung lap
            // var numberUtils = new NumberUtils.Number();
            // console.log(numberUtils.plus(10, 20));
            /* EXPORT VA IMPORT MODULE */
            /*
            * De export product ta su dung cu phap
            * */
            exports_1("numberUtilsModule", numberUtilsModule = "NumberUtils");
        }
    };
});
System.register("import-module-template", ["export-module-template"], function (exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var export_module_template_1;
    return {
        setters: [
            function (export_module_template_1_1) {
                export_module_template_1 = export_module_template_1_1;
            }
        ],
        execute: function () {
            console.log(export_module_template_1.numberUtilsModule);
        }
    };
});
//# sourceMappingURL=main.js.map