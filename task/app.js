const DynamoDB = require('./dynamodb-client')
const dbClient = new DynamoDB.DynamoDBClient('Task');

exports.lambdaHandler = async (event, context) => {
  try {
    switch (event.httpMethod) {
      case "GET": {
        const dbOutput = await dbClient.scan();

        return {
          "statusCode": 200,
          "body": JSON.stringify(dbOutput)
        };
      }
      case "PUT": {
        const body = JSON.parse(event.body);
        const dbOutput = await dbClient.put(body);

        return {
          "statusCode": 200,
          "body": JSON.stringify(dbOutput)
        };
      }
      default:
        return {
          "statusCode": 501
        };
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};
