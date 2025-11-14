"use strict";
// Oop - class - object
Object.defineProperty(exports, "__esModule", { value: true });
// class Animal {
//   name: string;
//   species: string;
//   sound: string;
//   constructor(name: string, species: string, sound: string) {
//     this.name = name;
//     this.species = species;
//     this.sound = sound;
//   }
//   //    method define
//   makeSound() {
//     console.log(`${this.name} is making  sound: ${this.sound}`);
//   }
// }
class Animal {
    name;
    species;
    sound;
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(`${this.name} is making  sound: ${this.sound}`);
    }
}
const dog = new Animal("Dogesh Bhai", "Dog", "Ghew Ghew");
const monkey = new Animal("Monkesh Bhai", "Monkey", "Hoo Hoo");
console.log(dog.name);
dog.makeSound();
// console.log("name:", dog.name, "sound:", dog.sound, "species:", dog.species);
// console.log(
//   "name:",
//   monkey.name,
//   "sound:",
//   monkey.sound,
//   "species:",
//   monkey.species
// );
// function add (num1: number,num2:number){
// }
// add (2,3)
//# sourceMappingURL=class.js.map