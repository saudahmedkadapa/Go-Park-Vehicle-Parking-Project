
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;
  
    // Simple email pattern check
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (name === "") {
      alert("Name must be filled out");
      return false;
    }
    if (email === "") {
      alert("Email must be filled out");
      return false;
    }
    if (!emailPattern.test(email)) {
      alert("Invalid email format");
      return false;
    }
    if (username === "") {
      alert("Username must be filled out");
      return false;
    }
    if (password === "") {
      alert("Password must be filled out");
      return false;
    }
    if (confirmPassword === "") {
      alert("Confirm password must be filled out");
      return false;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return false;
    }
  
    // Additional checks can be added here
  
    return true; // Allow form submission if all validations pass
  }
  