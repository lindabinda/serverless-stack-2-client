const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-zam1i4j6fxpu"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://yx10hed7l9.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_yvrdFzg6H",
    APP_CLIENT_ID: "7l4taq35dv803n5rl1qttemf6a",
    IDENTITY_POOL_ID: "us-east-1:8b5ba28c-828a-415e-a522-c2484d0e559a"
  }
  STRIPE_KEY: "pk_test_lLSPQrhc7DdX2q2Z9TaHWdT900EreTSxzk",

};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-1h49pb7a71bt4"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://8h1h5vhijh.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_Q4ec2R6fA",
    APP_CLIENT_ID: "65iqvubvut6scet8mhtjjmgrp2",
    IDENTITY_POOL_ID: "us-east-1:22cf54df-a447-4b1a-8e99-def168eef76a"
  }
  STRIPE_KEY: "pk_test_lLSPQrhc7DdX2q2Z9TaHWdT900EreTSxzk"
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};

