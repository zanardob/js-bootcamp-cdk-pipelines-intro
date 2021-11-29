# Jungle Scout CDK Bootcamp

## Adding the first stage

So far, you’ve provisioned a pipeline, but the pipeline isn’t deploying your application yet. You can do that by adding instances of your `CdkpipelinesDemoStage` to the pipeline.

Add a new import at the top of `lib/cdkpipelines-demo-pipeline-stack.ts` and then put the following lines of code underneath `// This is where we add the application stages`. Be sure to replace ACCOUNT with your actual account number and replace REGION with your preferred Region:

```typescript
import { CdkpipelinesDemoStage } from "./cdkpipelines-demo-stage";

// ...

// This is where we add the application stages
pipeline.addStage(
  new CdkpipelinesDemoStage(this, "PreProd", {
    env: { account: "ACCOUNT", region: "REGION" },
  })
);
```

All you have to do now is to commit and push this, and the pipeline automatically reconfigures itself to add the new stage and deploy to it. Run the following commands to do so:

```shell
# 'npm run build' first to make sure there are no typos
npm run build
git commit -am 'Add PreProd stage'
git push
```

After the pipeline finishes, you can confirm that the service is up and running. Go to the CloudFormation console, select the PreProd-WebService stack, go to the outputs tab, and click on the GatewayEndpoint URL. You will see ‘Hello from a Lambda Function’.

## Next Steps

Checkout the `step_3` branch and follow the instructions in `README.md`.
