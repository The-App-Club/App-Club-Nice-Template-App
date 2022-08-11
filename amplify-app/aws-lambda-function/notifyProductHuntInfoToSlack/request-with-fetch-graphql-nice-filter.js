const moment = require("moment");
const currentToday =
  moment().subtract(1, "days").format("YYYY-MM-DDT") + "00:00:00Z"; // 日付まわったばっかりだと取得できないので、1日前ぐらいがいい
// const currentToday = moment().subtract(0, "days").format("YYYY-MM-DDT") + "00:00:00Z";
const fetch = require("node-fetch");
const opts = {
  headers: {
    Authorization: "Bearer 1eQlQcZduzGn8G-SiV9INocu_AlTEZ31GkvsyAA3rDY",
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  method: "POST",
  mode: "cors",
  body: JSON.stringify({
    // http://api-v2-docs.producthunt.com.s3-website-us-east-1.amazonaws.com/object/post/
    // http://api-v2-docs.producthunt.com.s3-website-us-east-1.amazonaws.com/enum/postsorder/
    // http://api-v2-docs.producthunt.com.s3-website-us-east-1.amazonaws.com/operation/query/#posts
    query: `query { posts(first: 5, order: VOTES, postedAfter: "${currentToday}") {
        edges{
          cursor
          node{
            createdAt
            featuredAt
            name
            tagline
            description
            votesCount
            website
            reviewsRating
            thumbnail{
              type
              url
            }
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
