let input=document.getElementById('input');
 function inputValue(input2){
input.value=input.value+input2;
 }
 function reset(){
  input.value="";
 }
 function result(){
  input.value=eval(input.value);
 }