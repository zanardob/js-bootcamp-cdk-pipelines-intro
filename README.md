# Jungle Scout CDK Bootcamp

## Adding validations

In the pipeline you just built, new code is automatically being pushed to production. Obviously, this pipeline is missing something! A real continuous delivery pipeline needs to run tests to make sure the new code works.

In this tutorial, you add a test that uses `curl` to perform a web request against the endpoint you just deployed, which you run on AWS CodeBuild. In a real-world scenario, you plug in your more elaborate integration test suite in this step.

The test needs to know the URL of the HTTP endpoint of your service, but that endpoint is an API Gateway with a randomly generated name. Fortunately, you already added an AWS CloudFormation output that contains the address of the service. Now all you have to do is to wire the stack’s output into the test. Edit `cdkpipelines-demo-pipeline-stack.ts` and change the code that adds the `PreProd` stage to read as follows:

```typescript
const preprod = new CdkpipelinesDemoStage(this, "PreProd", {
  env: { account: "ACCOUNT1", region: "us-east-2" },
});
const preprodStage = pipeline.addStage(preprod, {
  post: [
    new ShellStep("TestService", {
      commands: [
        // Use 'curl' to GET the given URL and fail if it returns an error
        "curl -Ssf $ENDPOINT_URL",
      ],
      envFromCfnOutputs: {
        // Get the stack Output from the Stage and make it available in
        // the shell script as $ENDPOINT_URL.
        ENDPOINT_URL: preprod.urlOutput,
      },
    }),
  ],
});
```

Commit and push this with the following commands:

```bash
# 'npm run build' first to make sure there are no typos
npm run build
git commit -am 'Add tests to PreProd stage'
git push
```

Go to the pipeline and see the `TestService` step that was added.
