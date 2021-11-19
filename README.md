# Jungle Scout CDK Bootcamp

1. Make sure you are using Node v16

```
nvm use 16
```

2. Install dependencies

```
npm install
```

3. Replace `OWNER/REPO` on line 22 of `lib/cdkpipelines-demo-pipeline-stack.ts` with the owner and name of your forked Github repo.

4. Replace `ACCOUNT1` and `REGION` on line 8 of `bin/cdkpipelines-demo.ts` with your AWS account id and region.

5. Bootstrap your AWS account with the following command. Be sure to replace `account1-profile`, `ACCOUNT1`, and `REGION` with the appropriate values for you account and region.

```
npx cdk bootstrap \
  --profile account1-profile \
  --cloudformation-execution-policies arn:aws:iam::aws:policy/AdministratorAccess \
  aws://ACCOUNT1/REGION
```

6. Deploy the pipeline stack, replacing `account1-profile`

```
npx cdk deploy \
  --profile account1-profile \
  CdkpipelinesDemoPipelineStack
```
