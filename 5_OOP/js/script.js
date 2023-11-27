let str = 'some';
let strObj = new String(str);

// console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function(){
        console.log('hello');
    }
};

const jonh = Object.create(soldier)
// тоже самое 

// const jonh = {
//     health: 100
// }

// jonh.__proto__ = soldier;

// тоже самое 
Object.setPrototypeOf(jonh, soldier)

// console.log(jonh.armor);
jonh.sayHello()