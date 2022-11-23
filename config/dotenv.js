module.exports = function () {
  return {
    clientAllowedKeys: ['GEOAPIFY_API_KEY','ROOT_URL'],
    // Fail build when there is missing any of clientAllowedKeys environment variables.
    // By default false.
    failOnMissingKey: false,
  };
};
