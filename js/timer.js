let deadline = '2018-10-21';

function getTimeRemaining(endtime){
    let t= Date.parse(endtime) - Date.parse(new Date()),
    seconds = Math.floor((t/1000) % 60),
    minutes = Math.floor((t/1000/60) % 60),
    hours = Math.floor((t/(1000*60*60)));

    //возвращаем объект
    return {
        'total' : t,
        'hours' : hours,
        'minutes' : minutes,
        'seconds' : seconds

        };
}

//Подключаем наши елементы на страницу 
function setClock(id , endtime){
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock , 1000);//Обновляем наш updateClock каждую секунду 

//Каждую сикунду обновляються наши данные
    function updateClock() {
        let t = getTimeRemaining(endtime);
        hours.textContent = t.hours;
        minutes.textContent = t.minutes;
        seconds.textContent = t.seconds;

        if (t.total <= 0){
            clearInterval(setInterval); //Останавливаем наш таймер когда таймер доходит до deadline
    
       }
      
       setClock('timer' , deadline); 
       

    //Modal
       
       let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');

       more.addEventListener ('click' , function(){
           overlay.style.dispaly = 'block';
           this.classList.add('.popur-close');
           document.body.style.overflow = 'hidden';
       });

       close.addEventListener ('click' , function(){
        overlay.style.dispaly = 'none';
        more.classList.remove('.popur-close');
        document.body.style.overflow = 'hidden';
    });


    }};


