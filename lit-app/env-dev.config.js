// https://stackoverflow.com/questions/50407570/process-is-not-defined-error-with-polymer-and-redux
// HACK(keanulee): The Redux package assumes `process` exists - mock it here before
// the module is loaded.
window.process = {
  env: {
    googleCloudFunctionHostName: 'https://hogehoge.com',
    googleCloudStorageAPIHostName: 'https://nyan.com',
    uploadBucketName: 'b-backet',
    bucketDirectoryName: 'asset',
  },
};
