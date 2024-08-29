// for infinite clock

setInterval(function(){

    const currentDate = new Date();

    const currentHours = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
    const currentSeconds = currentDate.getSeconds();

    const secondsDegree = ((currentSeconds / 60) * 360);
    const minutesDegree = ((currentMinutes / 60) * 360);
    const hoursDegree = ((currentHours % 12) / 12 * 360) + ((currentMinutes / 60) * 30);

    document.querySelector('.second-hand').style.transform = `rotate(${secondsDegree}deg)`;
    document.querySelector('.minute-hand').style.transform = `rotate(${minutesDegree}deg)`;
    document.querySelector('.hour-hand').style.transform = `rotate(${hoursDegree}deg)`;

},1000)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


document.querySelector('#time').addEventListener('submit',function(event){
    event.preventDefault();

    const audio = new Audio('/public/cs_battle.mp3');
    audio.loop = true;

    const inputTime = document.querySelector('#appt-time').value;
    console.log(inputTime);

    const alarmTimeParts = inputTime.split(':');
    const alarmTime = new Date();

    alarmTime.setHours(parseInt(alarmTimeParts[0]));
    alarmTime.setMinutes(parseInt(alarmTimeParts[1]));
    alarmTime.setSeconds(0);

    const hours = alarmTimeParts[0];
    const minutes = alarmTimeParts[1];


    const alarmDegree = ((hours % 12) / 12 * 360) + ((minutes / 60) * 30);
    document.querySelector('.alarm-hand').style.transform = `rotate(${alarmDegree}deg)`;

    const currentTime = new Date();

    // let lastPerfectTime;
    // let timeHave = setInterval(function(){
    //     const currentTime = new Date();
    //     const hours = currentTime.getHours();
    //     const minutes = currentTime.getMinutes();

    //     const perfectTime = reverseTime(currentTime, hours, minutes);
    //     console.log(perfectTime);
    //     lastPerfectTime = perfectTime;

    // },60000); 
    // console.log(timeHave);
    // function updatePerfectTime() {
    //     const currentTime = new Date();
    //     const hours = currentTime.getHours();
    //     const minutes = currentTime.getMinutes();
    
    //     const perfectTime = reverseTime(currentTime, hours, minutes);
    //     console.log(perfectTime);
    //     lastPerfectTime = perfectTime;
    // }
    


 //   This is for time match with alarm time done
    const intervalId = setInterval(function(){
        const currentDate = new Date();

        const currentHours = currentDate.getHours();
        const currentMinutes = currentDate.getMinutes();
        const currentSeconds = currentDate.getSeconds();

        if(currentHours == alarmTime.getHours() && 
           currentMinutes == alarmTime.getMinutes() && 
           currentSeconds == alarmTime.getSeconds()){

            clearInterval(intervalId);
            rightAlarm(audio);
        }
    },1000);
    

    const form = document.getElementById('time');
    form.style.visibility='hidden';

    // const arriveButton = document.getElementById('arriveButton');
    // arriveButton.style.visibility='visible';

    const displayArea = document.getElementById('displayArea');
    displayArea.style.visibility='visible';
    document.getElementById('displayArea').textContent = "You enetered : "+ inputTime;

    // let count = 0;
    // updatePerfectTime();
    // let timeHave = setInterval(updatePerfectTime, 60000);
    // setInterval(function(){
    //     document.getElementById('displayTime').textContent = "You have only: "+ lastPerfectTime +" "+ count++ + " minutes ";
    // },5000);
    
    
//   This is for Button  //

    const button = document.createElement('button');
    button.textContent = 'Click me If you arrive';
    button.id = 'myButton';
    button.className = 'btn-class';
    button.addEventListener('click', function () { 
        
        // form.style.visibility='visible';
        // displayArea.style.visibility='hidden';
        // backButton.style.visibility='hidden';
        // button.style.visibility='hidden';

        // clearInterval(intervalId);
        location.reload();
        // console.log(audio.loop);
        // if(audio.loop){
        //     audio.pause();
        //     audio.currentTime = 0;
        // }
     });
    
    const buttonContainer = document.getElementById('arriveButton');
    buttonContainer.appendChild(button);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// This is for back button //

    const backButton = document.createElement('button');
    
    backButton.textContent = 'Back';
    backButton.id = 'backButton';
    backButton.className = 'back-btn-class';

    backButton.addEventListener('click', function(){
        
        // form.style.visibility='visible';
        // displayArea.style.visibility='hidden';
        // backButton.style.visibility='hidden';
        // button.style.visibility='hidden';

        // clearInterval(intervalId);
        location.reload();
        // console.log(audio.loop);
        // if(audio.loop){
        //     audio.pause();
        //     audio.currentTime = 0;
        // }
    });

    const backbuttonContainer = document.getElementById('backButton');
    backbuttonContainer.appendChild(backButton);

// right Alarm
    function rightAlarm(audio){
        audio.play();
    }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// get reverse Time 

    function reverseTime(time, hours, minutes){
        const currentHours = time.getHours();
        const currentMinutes = time.getMinutes();
        const minFromHour = (hours - currentHours) * 60;
        const minFromMinutes = Math.abs(minutes - currentMinutes) ;
        const totalMin = minFromHour + minFromMinutes;


        console.log(time);
        console.log(hours);
        console.log(minutes);
        console.log(currentHours);
        console.log(currentMinutes);
        console.log(minFromHour);
        console.log(minFromMinutes);
        console.log(totalMin);
        

        return totalMin;
    }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
});