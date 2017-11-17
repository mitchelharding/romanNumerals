//backend logic:
var translator = function(userIn){
  if (userIn.match(/[0-9]/i)){
   return true;
 } else {
   return userIn;
 }
};

//User interface logic:
$(document).ready(function(){
  $("form#romanTranslator").submit(function(event){
    event.preventDefault();
    var userIn = $("input#userInput").val();
    var result = translator(userIn);
    $(".result").text(result);

  });
});
