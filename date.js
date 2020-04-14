let MyDate = function (day,month,year) {
    this.day = day;
    this.month = month;
    this.year = year;
    this.getDay = function () {
        return this.day;

    };
    this.getMonth = function () {
        return this.month;

    };
    this.getYear = function () {
        return this.year;

    };
    this.setDay = function (day) {
        this.day = day;

    };
    this.setMonth = function (month) {
        this.monht = month;

    };
    this.setYear = function (year) {
        this.year = year;


    };
};

let date = new MyDate(2,2,2007);
// khai báo hàm  mydate. có tham số ngày tháng năm
let day = date.getDay();
// khai báo hàm getDay() có tác dụng lấy về ngày của biến date
// ở dòng 32 và gán vào biến day
let month = date.getMonth();
// khai báo hàm getMonth có tác dụng lấy về tháng của biến date
//và gán vào biến tháng
let year = date.getYear();
// khai báo hàm getyear có tác dụng lấy về năm của biến date. và gán vào biên năm
alert(day + "/" + month + "/" + year);

let date2 = new MyDate(5,5,2005);
let day2 = date2.getDay();
let month2 = date2.getMonth();
let year2 = date2.getYear();
alert(day2 + "/" month2 + "/" + year2);

date.setDay(10);
// gọi hàm setDay có tham số chuyền vào là 10 gán vào thuộc tính day của biến date.
day = date.getDay();
// gọi hàm getDay  trả về kết quả của thuộc tính day.của biên date và gán vào biến day.
date.setMonth(10);
// gọi hàm setMonht có tham số chuyền vào là 10 gán thuộc tính month của biến date.
month = date.getMonth();
//gọi hàm getMonth trả về kết quả của thuộc tính Month cuẩ biến date và gán vào biến Month.
date.setYear(2020);
// gọi hàm setYear có tham số chuyền vào  thuộc tính Year của biến date
year = date.getYear();
// gọi hàm getYear trả về kết quả của thuộc tính  yaer của biến date và gán vào biến Year.
alert(day + "/" + month + "/" + year);