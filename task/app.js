exports.lambdaHandler = async (event, context) => {
    try {
      switch (event.httpMethod) {
        case "GET": {
          const tasks = [
              {
                id: 1,
                name: 'task1'
              },
              {
                id: 2,
                name: 'task2'
              }
            ];
          return {
            "statusCode": 200,
            "body": JSON.stringify(tasks)
          };
        }
        case "PUT": {
          return {
            "statusCode": 200,
            "body": JSON.stringify({})
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
