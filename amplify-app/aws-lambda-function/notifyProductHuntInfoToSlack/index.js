const moment = require("moment");
const fetch = require("node-fetch");

function sortVotesCountDesc(targetItemList) {
  return targetItemList.sort(function (a, b) {
    var aVotesCount = a.votesCount;
    var bVotesCount = b.votesCount;
    if (aVotesCount < bVotesCount) {
      return 1;
    }
    if (aVotesCount > bVotesCount) {
      return -1;
    }
    return 0;
  });
}

function dressUpNotifyTemplate(targetItem) {
  const {
    indexNumber,
    productName,
    description,
    website,
    thumbnailType,
    thumbnailURL,
    starCount,
    votesCount,
  } = { ...targetItem };

  const starCountEmojiText = ":star:".repeat(Math.floor(starCount));
  const notifyTemplate = {
    type: "section",
    block_id: `${indexNumber}`,
    text: {
      type: "mrkdwn",
      text: `*${productName}*\n\n<${website}>\n\n${description}`,
    },
    accessory: {
      type: `${thumbnailType}`,
      image_url: `${thumbnailURL}`,
      alt_text: " ",
    },
    fields: [
      {
        type: "mrkdwn",
        text: `*Reviews Rating*\n${starCount} ${starCountEmojiText}`,
      },
      {
        type: "mrkdwn",
        text: `*VotesCount*\n${votesCount}`,
      },
    ],
  };
  return notifyTemplate;
}

function getProductHuntInfo() {
  return new Promise((resolve, reject) => {
    const currentToday =
      moment().subtract(1, "days").format("YYYY-MM-DDT") + "00:00:00Z";
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
        resolve(responseData);
      })
      .catch((error) => {
        console.log(error);
      });
  });
}

exports.handler = async (event) => {
  const productHuntInfo = await getProductHuntInfo();

  let edgeItemList = productHuntInfo.data.posts.edges;
  const resultList = [];

  edgeItemList = sortVotesCountDesc(edgeItemList);

  for (let index = 0; index < edgeItemList.length; index++) {
    const nodeItem = edgeItemList[index].node;
    const pushItem = {
      indexNumber: index,
      productName: nodeItem.name,
      website: nodeItem.website,
      description: nodeItem.description,
      thumbnailType: nodeItem.thumbnail.type,
      thumbnailURL: nodeItem.thumbnail.url,
      starCount: nodeItem.reviewsRating,
      votesCount: nodeItem.votesCount,
    };
    resultList.push(dressUpNotifyTemplate(pushItem));
  }

  const notifySlackMessage = {
    blocks: resultList,
  };

  // https://www.npmjs.com/package/@slack/webhook
  const { IncomingWebhook } = require("@slack/webhook");

  const url =
    "https://hooks.slack.com/services/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";

  const webhook = new IncomingWebhook(url);

  let targetPayload = notifySlackMessage;

  await webhook.send(targetPayload);
};
