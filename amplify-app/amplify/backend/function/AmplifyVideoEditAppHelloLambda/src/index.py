import json

import datetime


def handler(event, context):
    print("received event:")
    print(event)

    current_time = datetime.datetime.now().time()

    return {
        "statusCode": 200,
        "headers": {
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
        },
        "body": json.dumps("Hello from your new Amplify Python lambda! " + str(current_time)),
    }
