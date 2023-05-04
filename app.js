// let btn=document.querySelector('#newquote')
// let quote=document.querySelector('.quote')
// let person=document.querySelector('.person')
// const quotes=[{
//     quote:'q1',person:'p1'
// },{
//     quote:'q2',person:'p2'
// },{
//     quote:'q3',person:'p3'
// },{
//     quote:'q4',person:'p4'
// },{
//     quote:'q5',person:'p5'
// },{
//     quote:'q6',person:'p6'
// },];


// btn.addEventListener('click',function(){
//     let random= Math.floor(Math.random()*quotes.length)
//     quote.innerText=quotes[random].quote;
//     person.innerText=quotes[random].person;
// });

// let oepnBtn=document.getElementById('openbtn')
// let modelcontaier=document.getElementById('modelcontainer')
// let closebtn=document.getElementById('closebtn')

// oepnBtn.addEventListener('click',function(){
//     modelcontaier.style.display='block'
// })
// closebtn.addEventListener('click',function(){
//     modelcontaier.style.display='none'
// })
// window.addEventListener('click',function(e){
//  if(e.target===modelcontaier){
//     modelcontaier.style.display='none'
//  }
// })

const ssbtn=document.querySelector('#startstopbtn')
const resetbtn=document.querySelector('#resetbtn')

let min=0;
let sec=0;
let hr=0;


let leadsec=0;
let leadmin=0;
let leadhr=0;


let timerinterval=null;
let timerstatus="stopped"
function stopwatch(){
    sec++;
    if(sec/60===1){
        sec=0;
        min++;

    }
    if(min/60===1){
        min=0;
        hr++;

    }
    if(sec<10){
        leadsec="0"+sec.toString();
    }
    else{
        leadsec=sec;
    }
    if(min<10){
        leadmin="0"+min.toString();
    }
    else{
        leadmin=min;
    }
    if(hr<10){
        leadhr="0"+hr.toString();
    }
    else{
        leadhr=hr;
    }
    let dispaytimer=document.getElementById('timer').innerText=leadhr+":"+leadmin+":"+leadsec
}
//window.setInterval(stopwatch,1000)
ssbtn.addEventListener('click',function(){
    if(timerstatus==='stopped'){
        console.log("strted");
        timerinterval=window.setInterval(stopwatch,1000)
        document.getElementById('startstopbtn').innerHTML=`<p id="pause">Pause</p>`
        timerstatus="started"
    }
    else{
        window.clearInterval(timerinterval)
        document.getElementById('startstopbtn').innerHTML=` <p id="play">Play</p>`
        timerstatus="stopped"
    }
})

resetbtn.addEventListener('click',function(){
    window.clearInterval(timerinterval);
    sec=0;
    min=0;
    hr=0;
    document.getElementById('timer').innerHTML="00:00:00"
})
