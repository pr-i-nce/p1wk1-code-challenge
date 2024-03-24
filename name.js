function myFunction () {
    //fetch from HTML
    let userInput = document.querySelector("#userInput");
     let message = document.querySelector ("#message");
   //message to be printed
     message.innerHTML= "Welcome to the results portal, " + userInput.value +"."+"Key in your marks below to get your grade.";

}
