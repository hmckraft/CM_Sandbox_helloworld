let btnList = document.getElementsByTagName('button');
let btn = btnList[0];
let answer = document.getElementById('answer');

 btn.addEventListener('click', () => {
    answer.style.display= 'block';
    console.log('isbtnShowing',answer) 
 });
