
const anchor=document.getElementsByTagName('a');

for(let i=0;i<anchor.length;i++){
    anchor[i].addEventListener('click',anchorClick);
}

function anchorClick(e){
    console.log(e.target);
    console.log(e.target.getAttribute('href'));
    let id=e.target.getAttribute('href');
    let activeDiv=document.querySelector(id);
    let previousActive=document.querySelectorAll('div.active');
    for(let i=0;i<previousActive.length;i++){
        previousActive[i].classList.remove('active');
    }
    document.querySelector('a.active').classList.remove('active');
    e.target.classList.add('active');
    activeDiv.classList.add('active');
}