function main() {
    var showSalaryOfMonth = function () { return 1000000; };
    var showTotalSalaryOfMonth = function (bonus) { return 1000000 + bonus; };
    console.log(showSalaryOfMonth());
    console.log(showTotalSalaryOfMonth(1000));
}
main();
