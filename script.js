const newYears = '1st  January 2025';
const dayse= document.getElementById('days')
const hrse= document.getElementById('hours')
const minse= document.getElementById('minutes')
const secondse= document.getElementById('seconds')




function countdown(){


    const newYearDate= new Date(2025,0,1);
    const curdate= new Date();
    if(newYearDate.getFullYear()===curdate.getFullYear()){
        newYearDate=new Date(newYearDate.getFullYear()+1,0,1)
    }
    const seconds= (newYearDate-curdate)/1000;

    const days= Math.floor(seconds/(24*60*60));
    const hrs= Math.floor((seconds-(days*24*60*60))/3600);
    const mins= Math.floor((seconds%3600)/60);
    const secs= Math.floor(seconds%60)
    dayse.innerHTML=days;
    hrse.innerHTML=formatTime(hrs);
    minse.innerHTML=formatTime(mins);
    secondse.innerHTML=formatTime(secs);

   
    // const rseconds= seconds-(mins*60);

    // console.log(`${days}   ${hrs}  ${mins} ${secs}`);
}

function formatTime(time){
    return time<10? `0${time}`: time;
}

countdown()
setInterval(countdown, 1000);