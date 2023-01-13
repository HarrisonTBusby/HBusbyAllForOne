let fastFoodInput = document.getElementById('fastFoodInput');
let asianInput = document.getElementById('asianInput');
let sitdownInput = document.getElementById('sitdownInput');
let restaurantResult = document.getElementById('restaurantResult');
let menuInput = document.getElementById('menuInput');

let savedInput = "";
let savedInput2 = '';


menuInput.addEventListener('change', function(){

    savedInput = menuInput.value;
    
        
    restaurantTime(menuInput);}

)




function urlCall(url){
    fetch(url).then(
    response => response.text()).then(
        data =>
        {
            restaurantResult.textContent = data
            console.log(data);
        }
    )

}



function restaurantTime(menuInput){

    savedInput = menuInput.value;
    
    sayHelloUrl = "https://hbusbyallforone.azurewebsites.net/RestaurantPicker/Restaurant/" + savedInput;
    urlCall(sayHelloUrl);
  
   


}






