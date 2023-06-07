$(document).ready(function() {
    // Set the Indian time zone
    var indianTimeZone = "Asia/Kolkata";
  
    // Function to update the clock
    function updateClock() {
      var currentTime = new Date().toLocaleTimeString("en-US", { timeZone: indianTimeZone });
      var currentDate = new Date().toLocaleDateString("en-US", { timeZone: indianTimeZone, weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
      $(".clock").text(currentTime);
      $(".date").text(currentDate);
    }
  
    // Function to get a random quote using the Advice Slip API
    function getRandomQuote() {
      $.ajax({
        url: "https://api.adviceslip.com/advice",
        dataType: "json",
        success: function(data) {
          $(".quote").text(data.slip.advice);
        }
      });
    }
  
    // Show a random quote on page load
    getRandomQuote();
  
    // Show the translucent window after a delay
    setTimeout(function() {
      $(".translucent-window").addClass("show");
    }, 2000);
  
    // Event listener for the "Next" button
    $(".image-button").click(function() {
      getRandomQuote();
    });
  
    // Update the clock every second
    setInterval(function() {
      updateClock();
    }, 1000);
  
    // Change quote every 5 seconds
    setInterval(function() {
      getRandomQuote();
    }, 7000);
  });
  