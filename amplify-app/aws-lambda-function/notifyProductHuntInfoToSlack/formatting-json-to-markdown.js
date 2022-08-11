const jsonData = require("./request-with-fetch-graphql-nice-filter-result.json");
let edgeItemList = jsonData.data.posts.edges;
const resultList = [];

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
  //   const notifyTemplate = {
  //   "type": "section",
  //   "block_id": `"${indexNumber}"`,
  //   "text": {
  //     "type": "mrkdwn",
  //     "text": `"*${productName}*\n\n<${website}>\n\n${description}"`
  //   },
  //   "accessory": {
  //     "type": `"${thumbnailType}"`,
  //     "image_url": `"${thumbnailURL}"`,
  //     "alt_text": " "
  //   },
  //   "fields": [
  //     {
  //       "type": "mrkdwn",
  //       "text": `"*Reviews Rating*\n${starCount} ${starCountEmojiText}"`
  //     },
  //     {
  //       "type": "mrkdwn",
  //       "text": `"*VotesCount*\n${votesCount}"`
  //     }
  //   ]
  // };
  return notifyTemplate;
}

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

console.log(JSON.stringify(notifySlackMessage));
