//backend logic:
var translator = function(userIn){
  if (userIn % 1000 === 0){
    var number = userIn.slice();
    return number[0];
 } else if (userIn % 100 === 0){
   var number = userIn.slice();
   return number[0];
 } else if (userIn % 10 === 0){
   var number = userIn.slice();
   return number[0];
 } else if (userIn % 5 === 0){
   var number = userIn.slice();
   return number[0];
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
