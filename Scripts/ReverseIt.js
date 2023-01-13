let reverseNum1 = document.getElementById('reverseNum1');
let reverseResult = document.getElementById('reverseResult');

let savedInput = "";

reverseNum1.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        
    reverseTime(reverseNum1);}

})



function urlCall(url){
    fetch(url).then(
    response => response.text()).then(
        data =>
        {
            reverseResult.textContent = data
            console.log(data);
        }
    )

}

function reverseTime(reverseNum1){
var letters = /^[0-9]+$/;

  if(reverseNum1.value.match()){
    savedInput =reverseNum1.value;
    sayHelloUrl = "https://hbusbyallforone.azurewebsites.net/ReverseIt/ReverseIt/" + savedInput;
    urlCall(sayHelloUrl);
  }else{
    reverseResult.textContent = "Enter a valid response";
  }
   


}