[![CircleCI](https://circleci.com/gh/roberttaraya/hello-docker.svg?style=shield)](https://circleci.com/gh/roberttaraya/hello-docker)

# hello-docker

This is a demo node.js app that I'm using to demonstrate a basic CI/CD workflow with Docker, specifically:

### Code -> Github -> CircleCI -> Docker Hub -> Docker Cloud -> AWS

* pushing up clean code triggers the CI/CD workflow

* pushing up code that fails CircleCI stops the workflow
