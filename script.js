<script>
  // Show welcome message when page loads
  window.onload = function() {
    alert("Welcome to Varsha Constructions!");
  };

  // Change background color on click
  document.querySelector("section").onclick = function() {
    this.style.backgroundColor = "#e0f7fa";
  };

  // Add a button dynamically
  const btn = document.createElement("button");
  btn.innerText = "Contact Us";
  btn.style.padding = "10px 20px";
  btn.style.marginTop = "15px";
  btn.style.backgroundColor = "#333";
  btn.style.color = "#fff";
  btn.style.border = "none";
  btn.style.cursor = "pointer";

  // Button click event
  btn.onclick = function() {
    alert("Contact Varsha Constructions for your project!");
  };

  // Append button to section
  document.querySelector("section").appendChild(btn);
</script>
