'use strict';

const { DynamoDBDocumentClient, ScanCommand } = require("@aws-sdk/lib-dynamodb");
const { mockClient } = require("aws-sdk-client-mock");

const ddbClient = mockClient(DynamoDBDocumentClient);

describe('test-suite-1', function() {
  beforeEach(function() {
    this.ddbDocClient = mockClient(DynamoDBDocumentClient);
  });

  it('always passes', function() {
    this.ddbDocClient
      .on(ScanCommand)
      .resolves();
  });
});
