let helloInput = document.getElementById('helloInput');
let resultInput = document.getElementById('resultInput');

let savedInput = "";

helloInput.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        
    helloTime(helloInput);}

})



function urlCall(url){
    fetch(url).then(
    response => response.text()).then(
        data =>
        {
            resultInput.textContent = data
            console.log(data);
        }
    )

}

function helloTime(helloInput){
var letters = /^[A-Za-z]+$/;
  if(helloInput.value.match(letters)){
    savedInput = helloInput.value;
    sayHelloUrl = "https://hbusbyallforone.azurewebsites.net/SayHello/Hello/" + savedInput;
    urlCall(sayHelloUrl);
  }else{
    resultInput.textContent = "Enter a valid response";
  }
   


}