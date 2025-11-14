class Parent {
  name: string; // common
  age: number; // common
  address: string; // common

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  // common
  getSleep(numOFhours: number) {
    console.log(`${this.name} ${numOFhours} ghonta ghumai`);
  }
}
class Students extends Parent {}
// class Students {
//   name: string; // common
//   age: number; // common
//   address: string; // common

//   constructor(name: string, age: number, address: string) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//   }

//   // common
//   getSleep(numOFhours: number) {
//     console.log(`${this.name} ${numOFhours} ghonta ghumai`);
//   }
// }

const student1 = new Students("Rahul", 23, "Delhi");

// student1.getSleep(8);
// console.log(student1.name)

class Teachers extends Parent {
  designation: string; // own property

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address);
    this.designation = designation;
  }

  // own method
  takeClass(numOfHours: number) {
    console.log(`${this.name} ${numOfHours}  ghonta class nei`);
  }
}
// class Teachers {
//   name: string; // common
//   age: number; // common
//   address: string; // common
//   designation: string; // own property

//   constructor(name: string, age: number, address: string, designation: string) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//     this.designation = designation;
//   }

//   // common
//   getSleep(numOFhours: number) {
//     console.log(`${this.name} ${numOFhours} ghonta ghumai`);
//   }

//   // own method
//   takeClass(numOfHours: number) {
//     console.log(`${this.name} ${numOfHours}  ghonta class nei`);
//   }
// }

const teacher1 = new Teachers("Rahul", 23, "Delhi", "Teacher");

teacher1.getSleep(8);
teacher1.takeClass(4);
// teacher1.
