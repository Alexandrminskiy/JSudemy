const arr = ['Alex', 'Ana', 'Oleg', 'Alex'];

function unique(arr) {
    return Array.from(new Set(arr));
}

console.log(unique(arr));
// const set = new Set(arr);

// set.add('Ivan');
// set.delete(val);
// set.has(val);
// set.clear();
// set.size;

// for (let value of set) console.log(val);
// set.forEach((val, valueAgain, set) => {
// console.log(val, valueAgain);
// })

// console.log(set.values());
// set.keys();
