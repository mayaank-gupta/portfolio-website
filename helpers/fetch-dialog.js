const dialogflow = require("@google-cloud/dialogflow");
const uuid = require("uuid");
require("dotenv").config();

let privateKey = process.env.PRIVATE_KEY;
let clientEmail = process.env.CLIENT_EMAIL;
let config = {
  credentials: {
    private_key: privateKey,
    client_email: clientEmail,
  },
};

const ProjectID = process.env.PROJECT_ID;

const sessionClient = new dialogflow.SessionsClient(config);

module.exports = function runSample(payload) {
  return new Promise(async (resolve, reject) => {
    const sessionId = uuid.v4();
    const sessionPath = sessionClient.projectAgentSessionPath(
      ProjectID,
      sessionId
    );
    const request = {
      session: sessionPath,
      queryInput: {
        text: {
          text: payload.query || "Hello",
          languageCode: "en-US",
        },
      },
    };

    const responses = await sessionClient.detectIntent(request);

    const result = responses[0].queryResult?.fulfillmentText;

    return resolve(result);
  });
};
