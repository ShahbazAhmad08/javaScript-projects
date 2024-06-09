function getResult() {
  let weight = parseFloat(document.getElementById("waight").value);
  let height = parseFloat(document.getElementById("height").value / 100);
  let result = document.getElementById("result");
  let BMI = weight / (height * height);
  let resultMsg="Your BMI is "+BMI.toFixed(1);
if(BMI<18.5){
  resultMsg=resultMsg+" (UnderWeight";
}
else if(BMI>=18.5 && BMI<25)
  {
    resultMsg=resultMsg+" (Normal)"
  }
  else if(BMI>=25 && BMI<30)
    {
      resultMsg=resultMsg+" (OverWeight)"
    }
    else if(BMI>=30)
      {
        resultMsg=resultMsg+" (Obese)"
      }
      else{
          resultMsg="Enter valid height & weight"
      }

  result.innerHTML = resultMsg; 

}