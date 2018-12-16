const AWS = require('aws-sdk')

class DynamoDBClient {
  constructor(tableName) {
    const endpoint = process.env.DYNAMODB_ENDPOINT;
    const config = endpoint !== "" ? { endpoint } : { region: 'ap-northeast-1' };

    this.documentClient = new AWS.DynamoDB.DocumentClient(config);
    this.tableName = tableName;
  }

  scan() {
    return this.documentClient.scan({ TableName: this.tableName }).promise();
  }

  put(itemParams) {
    const dbParams = {
      TableName: this.tableName,
      Item: itemParams,
    }

    return this.documentClient.put(dbParams).promise();
  }
}

exports.DynamoDBClient = DynamoDBClient;
