var Students = /** @class */ (function () {
    function Students(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    // common
    Students.prototype.getSleep = function (numOFhours) {
        console.log("".concat(this.name, " ").concat(numOFhours, " ghonta ghumai"));
    };
    return Students;
}());
var student1 = new Students("Rahul", 23, "Delhi");
// student1.getSleep(8);
console.log(student1.name);
