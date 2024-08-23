'use strict';

const { DynamoDBDocumentClient, ScanCommand } = require("@aws-sdk/lib-dynamodb");
const { mockClient } = require("aws-sdk-client-mock");

const ddbDocClient = mockClient(DynamoDBDocumentClient);
ddbDocClient
  .on(ScanCommand)
  .resolves();

describe('test-suite-2', function() {
  beforeEach(function() {
    this.ddbDocClient = mockClient(DynamoDBDocumentClient);
  });

  it('always passes', function() {
    this.ddbDocClient
      .on(ScanCommand)
      .resolves();
  });
});
