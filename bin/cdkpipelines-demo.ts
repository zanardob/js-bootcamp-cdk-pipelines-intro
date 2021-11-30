#!/usr/bin/env node
import { App } from "@aws-cdk/core";
import { CdkpipelinesDemoStack } from "../lib/cdkpipelines-demo-stack";

const app = new App();

new CdkpipelinesDemoStack(app, "CdkpipelinesDemoPipelineStack", {
  env: { account: "ACCOUNT1", region: "REGION" },
});

app.synth();
