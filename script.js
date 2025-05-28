// SHOW or HIDE
function togglePassword() {
    const passwordInput = document.getElementById("password");
    const showBtn = document.querySelector(".show-btn");
    
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        showBtn.textContent = "👁️HIDE";
    } else {
        passwordInput.type = "password";
        showBtn.textContent = "👁️SHOW";
    }
}

// passwords
    function checkPasswords() {
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;

      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return false; 
      }
      return true; 
    }


// Forgot Password submission
if (document.querySelector("#forgotForm")) {
  document.querySelector("#forgotForm").addEventListener("submit", async e => {
    e.preventDefault();
    const email = e.target.querySelector('input').value;

    //sending reset link
    alert('If ${email} is registered, a reset link has been sent.');
  });
}s