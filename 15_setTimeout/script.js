const btn = document.querySelector('.btn');
let timerId,
    i = 0;




// function logger() {
//     if (i === 0){
//         clearInterval(timerId);
//     }
//         console.log('text');
//     i++;

// }

function myAnimation(){
    const elem = document.querySelector('.box');
    let pos = 0;

const id = setInterval(frame, 10);

    function frame(){
if (pos === 300){
    clearInterval();
}    else {
    pos++;
    elem.style.top=pos + 'px';
    elem.style.left=pos + 'px';
}
    }
}

btn.addEventListener('click', myAnimation)