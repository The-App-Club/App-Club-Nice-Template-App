const fetch = require("node-fetch");
const opts = {
  headers: {
    Authorization: "Bearer 1eQlQcZduzGn8G-SiV9INocu_AlTEZ31GkvsyAA3rDY",
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  method: "GET",
};

fetch(
  "https://api.producthunt.com/v1/posts/all?sort_by=votes_count&order=desc",
  opts
)
  .then((response) => {
    return response.json();
  })
  .then((responseData) => {
    console.log(JSON.stringify(responseData));
  })
  .catch((error) => {
    console.log(error);
  });
