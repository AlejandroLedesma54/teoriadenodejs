const axios = require("axios");

axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));

// Add error handling for network errors, status codes, and invalid JSON responses
