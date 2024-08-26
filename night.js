let btnup = document.getElementById('btnup');

window.onscroll=()=>{
    if(scrollY < 1200){
        btnup.style.display = 'block';
    }
    else{
        btnup.style.display = 'none';
    }
}

btnup.onclick = function(){
    scroll({
        
        left:0,
        top:0,
        behavior :"smooth"
     })
}
let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mounta3 = document.getElementById('mounta3');
let mounta4 = document.getElementById('mounta4');
let river = document.getElementById('river');
let boat6 = document.getElementById('boat6');
let kaiser = document.querySelector('.kaiser');
let head1 = document.getElementsByClassName('.head1')
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px' ;
    moon.style.top = value * 4 + 'px';
    mounta3.style.top = value * 2.5 + 'px';
    mounta4.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat6.style.top = value + 'px';
    boat6.style.left = value * 3 + 'px';

    if(scrollY >= 127){
        document.querySelector('.main').style.background ='linear-gradient(#376281,#10001f)';

        }else{document.querySelector('.main').style.background ='linear-gradient(#200016,#10001f)';}
    }
 
   

