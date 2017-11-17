//backend logic:
var translator = function(userIn){
  if (userIn % 1000 === 0){
   return userIn[0];
 } else {
   return false;
 }
};

//User interface logic:
$(document).ready(function(){
  $("form#romanTranslator").submit(function(event){
    event.preventDefault();
    var userIn = $("input#userInput").val();
    var result = translator(userIn);

    if (!result){
      $(".result").text(result);
    } else if (result === "1"){
      $(".result").text("M");
    }

  });
});
