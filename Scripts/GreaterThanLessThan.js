let greaterNum1 = document.getElementById('greaterNum1');
let greaterNum2 = document.getElementById('greaterNum2');
let greaterThanLessThanResult = document.getElementById('greaterThanLessThanResult');


let savedInput = "";
let savedInput2 = "";

greaterNum1.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        
    greaterTime(greaterNum1,greaterNum2);}

})

greaterNum2.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        
    greaterTime(greaterNum1, greaterNum2);}

})



function urlCall(url){
    fetch(url).then(
    response => response.text()).then(
        data =>
        {
            greaterThanLessThanResult.textContent = data
            console.log(data);
        }
    )

}

function greaterTime(greaterNum1, greaterNum2){
var letters = /^[A-Za-z]+$/;
var numbers = /^[0-9]+$/;
  if(greaterNum1.value.match(numbers) && greaterNum2.value.match(numbers)){
    savedInput = greaterNum1.value;
    savedInput2 = greaterNum2.value;
    sayHelloUrl = "https://hbusbyallforone.azurewebsites.net/GreaterThanLessThan/GreaterThanLessThan/" + savedInput + '/' + savedInput2;
    urlCall(sayHelloUrl);
  }else{
    greaterThanLessThanResult.textContent = "Enter a valid response";
  }
   


}