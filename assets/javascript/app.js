$(document).ready(function(){
var interval;
var timer = function() {
  var currentTime = $('#timer').text();
  currentTime--;
  $('#timer').text(currentTime);
  if (currentTime == 0) {
    clearInterval(interval);
    var correct = 0;
    var incorrect = 0;
  if ($('#q1a').is(':checked')) {
    correct++;
  }
  else {
    incorrect++;
  }
  if ($('#q2b').is(':checked')) {
    correct++;
  }
  else {
    incorrect++;
  }
  if ($('#q3b').is(':checked')) {
    correct++;
  }
  else {
    incorrect++;
  }
  alert("correct: " + correct);
  alert("incorrect: " + incorrect);

}

}
interval = setInterval(timer,1000);




});
