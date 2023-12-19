const btn = document.querySelector('button'),
    overlay = document.querySelector('.overlay');

// btn.onclick = function () {
//     alert('Click');
// }

// btn.addEventListener('click', () => {
//     alert('Клик')
// })

// btn.addEventListener('click', (event) => {
//     console.log(event.target);
//     event.target.remove();
//     console.log('ghbdtn');
// })
// let i = 0;

const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);

    // i++;
    // if (i==1){
    //     btn.removeEventListener('click', deleteElement);
    // }
    // e.target.remove();
}

btn.addEventListener('click', deleteElement);
overlay.addEventListener('click', deleteElement);

const link = document.querySelector('a');

link.addEventListener('click', function(e){
    e.preventDefault();
    
    console.log(e.target);
})