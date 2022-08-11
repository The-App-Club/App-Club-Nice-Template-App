const fetch = require("node-fetch");
const opts = {
  headers: {
    Authorization: "Bearer HERE_YOUR_TOKEN",
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  method: "POST",
  mode: "cors",
  body: JSON.stringify({
    // http://api-v2-docs.producthunt.com.s3-website-us-east-1.amazonaws.com/enum/postsorder/
    // http://api-v2-docs.producthunt.com.s3-website-us-east-1.amazonaws.com/operation/query/#posts
    query: `query { posts(first: 5, order: VOTES) {
        edges{
          cursor
          node{
            id
            name
            tagline
            description
            url
            votesCount
            thumbnail{
              type
              url
            }
            website
            reviewsRating
}}}}`,
  }),
};

fetch("https://api.producthunt.com/v2/api/graphql", opts)
  .then((response) => {
    return response.json();
  })
  .then((responseData) => {
    console.log(JSON.stringify(responseData));
  })
  .catch((error) => {
    console.log(error);
  });
