document.addEventListener("DOMContentLoaded", function() {
    // Add event listener for the "Login with Email" link
    document.getElementById("loginWithEmail").addEventListener("click", function(event) {
      event.preventDefault(); // Prevent default link behavior
      
      // Here you can add code to handle the login with email process
      // For example, redirect to the login page for email
      window.location.href = "login.html"; // Redirect to login page
    });
  
    // Add event listener for the "Sign up" link
    document.getElementById("signupLink").addEventListener("click", function(event) {
      event.preventDefault(); // Prevent default link behavior
      
      // Here you can add code to handle the sign up process
      // For example, redirect to the sign up page
      window.location.href = "signup.html"; // Redirect to sign up page
    });
  });

  
  window.fbAsyncInit = function() {
    FB.init({
      appId      : 'https://developers.facebook.com/',
      cookie     : true,
      xfbml      : true,
      version    : 'v10.0'
    });
    
    // Check login status
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  };
  
  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  // Facebook login status change callback
  function statusChangeCallback(response) {
    if (response.status === 'connected') {
      // User is logged into Facebook
      console.log('Logged in with Facebook');
      // Here you can handle further actions after successful login
    } else {
      // User is not logged into Facebook
      console.log('Not logged into Facebook');
    }
  }

  // Add event listener for the login button
  document.getElementById('loginBtn').addEventListener('click', function() {
    // Initiate Facebook login
    FB.login(function(response) {
      // Check login status after the user logs in
      statusChangeCallback(response);
    }, { scope: 'public_profile,email' }); // Specify the requested permissions
  });