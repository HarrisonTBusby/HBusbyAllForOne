let addNum1 = document.getElementById('addNum1');
let addNum2 = document.getElementById('addNum2');
let numInput = document.getElementById('numInput');

let savedInput = "";
let savedInput2 = "";

addNum1.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        
    numTime(addNum1,addNum2);}

})

addNum2.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        
   numTime(addNum1, addNum2);}

})



function urlCall(url){
    fetch(url).then(
    response => response.text()).then(
        data =>
        {
            numInput.textContent = data
            console.log(data);
        }
    )

}

function numTime(addNum1,addNum2){
var letters = /^[0-9]+$/;
  if(addNum1.value.match(letters) && addNum2.value.match(letters)){
    savedInput = addNum1.value;
    savedInput2 = addNum2.value;
    add2NumbersURL = "https://hbusbyallforone.azurewebsites.net/add2Numbers/AddingNumbers/" + savedInput + '/' + savedInput2;
    urlCall(add2NumbersURL);
  }else{
   numInput.textContent = "Enter a valid response";
  }
   


}