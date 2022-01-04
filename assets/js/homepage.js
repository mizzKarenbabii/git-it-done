var getUserRepos = function(user) {
    // format the github api url
    var apiUrl = "https://api.github.com/users/" + user + "/repos";
  
    // make a request to the url
    fetch(apiUrl).then(function(response) {
      response.json().then(function(data) {
        console.log(data);
      });
    });
  };

  var userFormE1 = document.querySelector("#user-form");
  var nameInputE1 = document.querySelector("#username");


  var forSubmitHandler = function(event){
      event.preventDefault ();
      console.log(event);
  } 
  
  userFormE1.addEventListener("submit", formSubmitHandler)
