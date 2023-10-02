const option = {
    name: 'test',
    width: 1024,
    height: 1024,
    color: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){
        console.log('Test');
    }
};
option.makeTest();

const {border, bg} = option.color;
console.log(border);

// console.log(option.color.border);

// delete option.name;

// console.log(option);


// for (let key in option) {
//     if (typeof (option[key]) === 'object') {
//         for (let i in option[key]) {
//             console.log(`Свойства ${i} имеет значение: ${option[key][i]}`);
//         }
//     } else {
//         console.log(`Свойства ${key} имеет значение: ${option[key]}`);
//     }
// }
console.log(Object.keys(option).length);