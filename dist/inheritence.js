"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Students {
    name; // common
    age; // common
    address; // common
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    // common
    getSleep(numOFhours) {
        console.log(`${this.name} ${numOFhours} ghonta ghumai`);
    }
}
const student1 = new Students("Rahul", 23, "Delhi");
// student1.getSleep(8);
console.log(student1.name);
//# sourceMappingURL=inheritence.js.map