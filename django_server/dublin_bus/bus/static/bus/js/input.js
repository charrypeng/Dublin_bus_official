
// Author: Stacy 

// This JQuery Function creates the date and time picker as well as limits the dates selectable by having the minimum date always be today.


$(document).ready(function () {
  var today = new Date();
  var end = new Date('12/31/2020');
    $('#datepicker').datepicker({
      startDate: today,
      endDate: end,
      format: 'dd/mm/yyyy',
      todayHighlight: 'true',
});
});


// This Jquery function should change the text on the show/hide menu button when pressed 

  $("#JP-btn").click(function(e){
    e.preventDefault(); //prevents the need to double click
    $('#floating-panel').toggle();
    if($('#floating-panel').is(':visible')) {
        $(this).html('Hide Planner');
    } else {
        $(this).html('Show Planner');
    }
});
// This function takes the values entered into the intputs on the index page and re prints them out. 
function myFunction() {
    var input1 = document.getElementById("searchTextField_start").value;
    var input2 = document.getElementById("searchTextField_destination").value;
    var input3 = document.getElementById("datepicker").value;
    document.getElementById("test").innerHTML = "Start: " + input1; 
    document.getElementById("test2").innerHTML = "Destination: " + input2;
    document.getElementById("test3").innerHTML = "Estimated Travel Time: " + input3;
  }
  // Below is the code for the direction planner
  //first we show the planner
    $('#submit-btn').click(function(){
      $('#directions').show({
        bottom: '-300px',
        height:'400px',
        position: 'absolute',
      });
    });
    //then we can close the planner
   $("#close").click(function(){
      $("#directions").hide();
    });
    //then we can animate the planner each time!
    $('#submit-btn').click(function() {
      $('#directions').animate({
        bottom: '-300px',
        height: '400px',
        position: 'absolute',
      });
    });