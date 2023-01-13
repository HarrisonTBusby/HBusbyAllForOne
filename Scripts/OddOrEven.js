let oddOrEvenNum = document.getElementById("oddOrEvenNum");
let oddOrEvenResult = document.getElementById('oddOrEvenResult');


let savedInput = "";

oddOrEvenNum.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        
    oddTime(oddOrEvenNum);}

})



function urlCall(url){
    fetch(url).then(
    response => response.text()).then(
        data =>
        {
            oddOrEvenResult.textContent = data
            console.log(data);
        }
    )

}

function oddTime(helloInput){
var letters = /^[0-9]+$/;

  if(oddOrEvenNum.value.match(letters)){
    savedInput =oddOrEvenNum.value;
    sayHelloUrl = "https://hbusbyallforone.azurewebsites.net/OddOrEven/BigTime/" + savedInput;
    urlCall(sayHelloUrl);
  }else{
    oddOrEvenResult.textContent = "Enter a valid response";
  }
   


}