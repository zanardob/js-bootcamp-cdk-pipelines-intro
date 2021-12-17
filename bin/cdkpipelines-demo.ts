#!/usr/bin/env node
import { App } from "@aws-cdk/core";
import { CdkpipelinesDemoPipelineStack } from "../lib/cdkpipelines-demo-pipeline-stack";

const app = new App();

new CdkpipelinesDemoPipelineStack(app, "CdkpipelinesDemoPipelineStack", {
  env: { account: "39453534606", region: "us-west-2" },
});

app.synth();
