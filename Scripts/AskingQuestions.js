let questionInput1 = document.getElementById("questionInput1");
let questionInput2 = document.getElementById('questionInput2');
let questionResult = document.getElementById('questionResult');


let savedInput = "";
let savedInput2 = "";

questionInput1.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        
    questionTime(questionInput1,questionInput2);}

})

questionInput2.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        
    questionTime(questionInput1,questionInput2);}

})



function urlCall(url){
    fetch(url).then(
    response => response.text()).then(
        data =>
        {
            questionResult.textContent = data
            console.log(data);
        }
    )

}

function questionTime(questionInput1, questionInput2){
var letters = /^[A-Za-z]+$/;
var numbers = /^[0-9]+$/;
  if(questionInput1.value.match(letters) && questionInput2.value.match(numbers)){
    savedInput = questionInput1.value;
    savedInput2 = questionInput2.value;
    sayHelloUrl = "https://hbusbyallforone.azurewebsites.net/AskingQuestions/AskingQuestions/" + savedInput + '/' + savedInput2;
    urlCall(sayHelloUrl);
  }else{
    questionResult.textContent = "Enter a valid response";
  }
   


}