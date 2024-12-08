// there are two types of memory:
//Heap(Premitive) Stack(Non premitive)
//in heap we are using copy of original data but in stack we are using refrence of original data

let firstname="Nikita"
let secondname=firstname
secondname="Ghosh"
console.log(firstname);
console.log(secondname);

let userone={
    name:"niki",
    age:10,
    email:"niki21@gmail.com"
}
let usertwo=userone;
console.log(userone.age);
console.log(usertwo.age);

usertwo.age=20

console.log(userone.age);
console.log(usertwo.age);




