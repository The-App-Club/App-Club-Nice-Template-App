(async () => {
  const { IncomingWebhook } = require("@slack/webhook");

  const url =
    "HERE_YOUR_SLACK_WEBHOOK_URL";

  const webhook = new IncomingWebhook(url);

  let targetPayload = {
    text: "テスト実行",
  };
  await webhook.send(targetPayload);
})();
