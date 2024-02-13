let pupils=document.querySelectorAll(".pupil");
let currpmX,currpmY,currpmx=-60,currpmy=-60,maxrangeY=window.innerHeight,maxrangeX=window.innerWidth;
const mousemove=(e)=>{
    // console.log(typeof(maxrangeX));
    currpmX=(e.clientX)/maxrangeX;
    currpmY=(e.clientY)/maxrangeY;
    currpmy=currpmY*150-60;
    currpmx=currpmX*150-60;

    if(currpmx>60){currpmx=60;}
    if(currpmy>60){currpmy=60;}
    console.log(currpmx);
        
      
      pupils[0].style.transform=`translate(${currpmx}px,${currpmy}px)`  
      pupils[1].style.transform=`translate(${currpmx}px,${currpmy}px)`  
    
}
window.addEventListener("mousemove",mousemove);
pupils[0].style.transform=`translate(${currpmx}px,${currpmy}px)`  
pupils[1].style.transform=`translate(${currpmx}px,${currpmy}px)` 


