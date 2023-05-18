#!/bin/bash

echo AWS SSO LOGIN

aws sso login --profile sensedia-dev


echo "Configuring AWS Auth"

export CODEARTIFACT_AUTH_TOKEN=`aws codeartifact get-authorization-token --domain repo-sensedia-eng --domain-owner 660412058498 --query authorizationToken --profile sensedia-dev --output text`

echo registry=https://repo-sensedia-eng-660412058498.d.codeartifact.us-east-1.amazonaws.com/npm/sensedia-npm-group/ > .npmrc
echo //repo-sensedia-eng-660412058498.d.codeartifact.us-east-1.amazonaws.com/npm/sensedia-npm-group/:always-auth=true >> .npmrc
echo //repo-sensedia-eng-660412058498.d.codeartifact.us-east-1.amazonaws.com/npm/sensedia-npm-group/:_authToken=${CODEARTIFACT_AUTH_TOKEN} >> .npmrc


printf "\n> Finish! Enjoy it!\n"

exit 0