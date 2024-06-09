// function time()
// {
//   setInterval(()=>{
//     const date=new Date()
//     const hour=date.getHours();
//     const minutes=date.getMinutes();
//     const seconds=date.getSeconds();
//     let hrs=document.getElementById("hrs");
//     let min=document.getElementById("min");
//     let sec=document.getElementById("sec");
//     hrs.innerText=hour<10?"0"+hour:hour;
//     min.innerHTML=minutes<10?"0"+minutes:minutes;
//     sec.innerHTML=seconds<10?"0"+seconds:seconds;
//   },1000)
 
// }
 function update(){
   let hrs=document.getElementById("hrs");
   let min=document.getElementById("min");
   let sec=document.getElementById("sec");
   const date=new Date();
   hrs.innerHTML=date.getHours()<10?"0"+date.getHours():date.getHours();
   min.innerHTML=date.getMinutes()<10?"0"+date.getMinutes():date.getMinutes();
   sec.innerHTML=date.getSeconds()<10?"0"+date.getSeconds():date.getSeconds();

 }
 setInterval(()=>{
  update();
 },1000)
