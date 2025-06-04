let slider = document.getElementById("myRange");
let value = document.getElementById("value");
value.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  value.innerHTML = this.value;
} 