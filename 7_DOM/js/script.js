// const box = document.getElementById('box');
// console.log(box);

// const btns = document.getElementsByTagName('button')[1];
// console.log(btns);

// const circles = document.getElementsByClassName('circle')[1];
// console.log(circles);

// const hearts = document.querySelectorAll('.heart');

// hearts.forEach(i=>{
//     console.log(i);
// })

// const oneHeart = document.querySelector('.heart');
// console.log(oneHeart);

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = `background-color: blue; width: 500px`;

btns[1].style.borderRadius = '25%';
circles[1].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor='orange'.
// }

hearts.forEach(i => {
    i.style.backgroundColor = 'blue'
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут был Я');
div.classList.add('black');

// document.body.append(div);
// wrapper.append(div);
wrapper.prepend(div);
// hearts[1].before(div);
// hearts[1].after(div);
// circles[0].remove()
// hearts[0].replaceWith(div);
// div.innerHTML = "<h1>Hello World</h1>";
div.textContent="Hello world"