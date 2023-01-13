let madlib1 = document.getElementById('madlib1');
let madlib2 = document.getElementById('madlib2');
let madlib3 = document.getElementById('madlib3');
let madlib4 = document.getElementById('madlib4');
let madlib5 = document.getElementById('madlib5');
let madlib6 = document.getElementById('madlib6');
let madlib7 = document.getElementById('madlib7');
let madlib8 = document.getElementById('madlib8');
let madlib9 = document.getElementById('madlib9');
let madlib10 = document.getElementById('madlib10');
let madlibResult = document.getElementById('madlibResult');

let savedInput1 = "";
let savedInput2 = "";
let savedInput3 = '';
let savedInput4 = '';
let savedInput5 = '';
let savedInput6 = '';
let savedInput7 = '';
let savedInput8 = '';
let savedInput9 = '';
let savedInput10= '';




madlib1.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        
    madTime(madlib1,madlib2,madlib3, madlib4, madlib5, madlib6, madlib7, madlib8, madlib9, madlib10);}

})

madlib2.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        
    madTime(madlib1,madlib2,madlib3, madlib4, madlib5, madlib6, madlib7, madlib8, madlib9, madlib10);}

})

madlib3.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        
    madTime(madlib1,madlib2,madlib3, madlib4, madlib5, madlib6, madlib7, madlib8, madlib9, madlib10);}

})


madlib4.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        
    madTime(madlib1,madlib2,madlib3, madlib4, madlib5, madlib6, madlib7, madlib8, madlib9, madlib10);}

})

madlib5.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        
    madTime(madlib1,madlib2,madlib3, madlib4, madlib5, madlib6, madlib7, madlib8, madlib9, madlib10);}

})

madlib6.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        
    madTime(madlib1,madlib2,madlib3, madlib4, madlib5, madlib6, madlib7, madlib8, madlib9, madlib10);}

})

madlib7.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        
    madTime(madlib1,madlib2,madlib3, madlib4, madlib5, madlib6, madlib7, madlib8, madlib9, madlib10);}

})

madlib8.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        
    madTime(madlib1,madlib2,madlib3, madlib4, madlib5, madlib6, madlib7, madlib8, madlib9, madlib10);}

})

madlib9.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        
    madTime(madlib1,madlib2,madlib3, madlib4, madlib5, madlib6, madlib7, madlib8, madlib9, madlib10);}

})

madlib10.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        
    madTime(madlib1,madlib2,madlib3, madlib4, madlib5, madlib6, madlib7, madlib8, madlib9, madlib10);}

})





function urlCall(url){
    fetch(url).then(
    response => response.text()).then(
        data =>
        {
            madlibResult.textContent = data
            console.log(data);
        }
    )

}

function madTime(madlib1, madlib2, madlib3, madlib4, madlib5, madlib6, madlib7, madlib8, madlib9, madlib10){
var letters = /^[A-Za-z]+$/;
var numbers = /^[0-9]+$/;
  if(madlib1.value.match(letters) && madlib2.value.match(letters) && madlib3.value.match(letters) && madlib4.value.match(letters) && madlib5.value.match(letters) && madlib6.value.match(letters) && madlib7.value.match(letters) && madlib8.value.match(letters) && madlib9.value.match(letters) && madlib10.value.match(letters)){
    savedInput1 = madlib1.value;
    savedInput2 = madlib2.value;
    savedInput3 = madlib3.value;
    savedInput4 = madlib4.value;
    savedInput5 = madlib5.value;
    savedInput6 = madlib6.value;
    savedInput7 = madlib7.value;
    savedInput8 = madlib8.value;
    savedInput9 = madlib9.value;
    savedInput10 = madlib10.value;
    
    sayHelloUrl = "https://hbusbyallforone.azurewebsites.net/MadLib/BigSchleem/" + savedInput1 + '/' + savedInput2 + '/' + savedInput3 + '/' + savedInput4 + '/' + savedInput5 + '/' + savedInput6 + '/' + savedInput7 + '/' + savedInput8 + '/' + savedInput9 + '/' + savedInput10;
    urlCall(sayHelloUrl);
  }else{
    madlibResult.textContent = "Enter a valid response";
  }
   


}