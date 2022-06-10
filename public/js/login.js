// $(document).ready(function () {
  // $(".signup-form").hide();

  const loginFormHandler = (event) => {
    event.preventDefault();

    const email = document.querySelector("#login-email").value.trim();
    const password = document.querySelector("#login-pass").value.trim();

    // if (email && password) {
      // const response = await 
      fetch("/api/user/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
      }).then( function() {
        console.log('sucessful-1');
        document.location.replace("/dashboard");
        console.log('sucessful-2');
      }).catch(err => console.log(err))
      
    //   if (response.ok) {
    //     document.location.replace("/dashboard");
    //   } else {
    //     alert(response.statusText);
    //   }
    // }
  };

  document
    .querySelector(".login-form")
    .addEventListener("submit", loginFormHandler);
    // $(".create").click(function () {
    // $(".login-form").hide();
    // $(".signup-form").show();
  // });

  // $(".login").click(function () {
  // });
// });
