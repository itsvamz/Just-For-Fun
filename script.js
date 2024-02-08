document.getElementById("flyButton").addEventListener("click", function() {
  var button = document.getElementById("flyButton");
  var wid = window.innerWidth/2;
  var hit = window.innerHeight/2;
  // Generate random position values
  var randomLeft = Math.floor(Math.random() * wid);
  var randomTop = Math.floor(Math.random() * hit);

  // Apply the random position
  button.style.transform = "translate(" + randomLeft + "px, " + randomTop + "px) rotate(360deg)";
});
  
  document.getElementById("yes").addEventListener("click", function() {
    window.location.href = "go.html";
  });
  