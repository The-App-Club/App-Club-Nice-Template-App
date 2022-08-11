function formatDateTime(date, format, diff) {
  format = format.replace(/yyyy/g, date.getFullYear());
  format = format.replace(/MM/g, ("0" + (date.getMonth() + 1)).slice(-2));
  format = format.replace(/dd/g, ("0" + (date.getDate() - diff)).slice(-2));
  format = format.replace(/HH/g, ("0" + date.getHours()).slice(-2));
  format = format.replace(/mm/g, ("0" + date.getMinutes()).slice(-2));
  format = format.replace(/ss/g, ("0" + date.getSeconds()).slice(-2));
  format = format.replace(/SSS/g, ("00" + date.getMilliseconds()).slice(-3));
  return format;
}

const AWS = require("aws-sdk");

// https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-region.html
const awsCostExplorer = new AWS.CostExplorer({
  apiVersion: "2017-10-25",
  region: "us-east-1",
});

const currentToday = formatDateTime(new Date(), "yyyy-MM-dd", 1);
const previousDay = formatDateTime(new Date(), "yyyy-MM-dd", 2);

// https://github.com/ytk6565/aws-billing-daily-report/blob/main/src/services/CodeExplorer.ts
const params = {
  Metrics: ["UnblendedCost"],
  TimePeriod: {
    End: currentToday,
    Start: previousDay,
  },
  Granularity: "DAILY",
  GroupBy: [
    {
      Type: "DIMENSION",
      Key: "SERVICE",
    },
  ],
};

// https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CostExplorer.html#getCostAndUsage-property
awsCostExplorer.getCostAndUsage(params, (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(JSON.stringify(data));
});
