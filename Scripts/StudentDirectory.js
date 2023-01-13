let studentInput = document.getElementById('studentInput');
let studentInput2 = document.getElementById('studentInput2');
let studentInput3 = document.getElementById('studentInput3');
let studentInput4 = document.getElementById('studentInput4');
let studentResult = document.getElementById('studentResult');
let studentResult2 = document.getElementById('studentResult2');
let studentResult3 = document.getElementById('studentResult3');
let studentResult4 = document.getElementById('studentResult4');
let studentResult5 = document.getElementById('studentResult5');


let savedInput = "";

studentInput.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        
    studentTime1(studentInput);
    
    
}
})

studentInput2.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        
    studentTime2(studentInput2);
    
    
}
})

studentInput3.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        
    studentTime3(studentInput3);
    
    
}
})

studentInput4.addEventListener('keydown', function(event){
    if(event.key === 'Enter'){
        
    studentTime4(studentInput4);
    
    
}
})




function urlCall(url){
    fetch(url).then(
    response => response.json()).then(
        data =>
        {
            studentResult.textContent = data.firstName;
            studentResult2.textContent = data.lastName;
            studentResult3.textContent = data.slackName;
            studentResult4.textContent = data.email;
            studentResult5.textContent = data.hobbies;
            console.log(data);
        }
    )

}

function studentTime1(studentInput){
var letters = /^[A-Za-z]+$/;

  if(studentInput.value.match(letters)){
    savedInput = studentInput.value;
    studentDirectory1 = "https://hbusbyallforone.azurewebsites.net/StudentDirectory/GetStudentByFirstName/" + savedInput;
    urlCall(studentDirectory1);
  }else{
    studentResult.textContent = "Enter a valid response";
  }
   


}

function studentTime2(studentInput){
    var letters = /^[A-Za-z]+$/;
    
      if(studentInput2.value.match(letters)){
        savedInput2 = studentInput2.value;
        studentDirectory2 = "https://hbusbyallforone.azurewebsites.net/StudentDirectory/GetStudentByLastName/" + savedInput2;
        urlCall(studentDirectory2);
      }else{
        studentResult.textContent = "Enter a valid response";
      }
       
    
    
    }

    function studentTime3(studentInput){
        var letters = /^[A-Za-z + " "]+$/;
        
          if(studentInput3.value.match(letters)){
            savedInput3 = studentInput3.value;
            studentDirectory3 = "https://hbusbyallforone.azurewebsites.net/StudentDirectory/GetStudentBySlackName/" + savedInput3;
            urlCall(studentDirectory3);
          }else{
            studentResult.textContent = "Enter a valid response";
          }
           
        
        
        }

        function studentTime4(studentInput){
            var letters = /^[A-Za-z + @ + .]+$/;
            
              if(studentInput4.value.match(letters)){
                savedInput4 = studentInput4.value;
                studentDirectory4 = "https://hbusbyallforone.azurewebsites.net/StudentDirectory/GetStudentByEmail/" + savedInput4;
                urlCall(studentDirectory4);
              }else{
                studentResult.textContent = "Enter a valid response";
              }
               
            
            
            }