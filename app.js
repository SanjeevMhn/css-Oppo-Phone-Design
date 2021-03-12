const arrow = document.querySelector('.arrow-up');
const main = document.querySelector('.wrapper');
const main2 = document.querySelector('.wrapper-keycode-view');
const back = document.querySelector('.back');
const headerTime = document.querySelector('.header-time');
const backImg = document.querySelector('.background-img');

arrow.addEventListener('click',function(){
    main.style.top = -32 + 'rem';
    main2.style.top = 3.5 + 'rem';
    headerTime.style.visibility = "visible";
    backImg.style.filter = "blur(5px)";
});

back.addEventListener('click',function(){
    main2.style.top = 32 + 'rem';
    main.style.visibility = "visible";
    main.style.top = 0 + 'rem';
    backImg.style.filter = "blur(0px)";
    headerTime.style.visibility = "hidden";
})