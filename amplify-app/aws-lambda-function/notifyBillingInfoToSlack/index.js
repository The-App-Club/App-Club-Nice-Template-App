exports.handler = async (event) => {
  // https://www.npmjs.com/package/@slack/webhook
  const { IncomingWebhook } = require("@slack/webhook");

  const url =
    "https://hooks.slack.com/services/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";

  const webhook = new IncomingWebhook(url);

  let targetPayload = {
    text: "テスト実行。lambdaからのnodejsから実行。",
  };

  await webhook.send(targetPayload);
};
