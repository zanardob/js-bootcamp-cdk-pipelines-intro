# Jungle Scout CDK Bootcamp

## Prerequisites

1. Start up an A Cloud Guru Sandbox environment
2. Configure your aws-cli with your sandbox environment credentials
3. Generate a [personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) in your Github account. The token should have the scopes `repo` and `admin:repo_hook`.
4. Add your token to Secrets Manager in your ACG Sandbox environment as a plaintext secret with the name `github-token`

## Repo Setup

1. Make sure you are using Node v16

```
nvm use 16
```

2. Install dependencies

```
npm install
```

## Deploying the stack

1. Replace `OWNER/REPO` on line 22 of `lib/cdkpipelines-demo-pipeline-stack.ts` with the owner and name of your forked Github repo.

2. Replace `ACCOUNT1` and `REGION` on line 8 of `bin/cdkpipelines-demo.ts` with your AWS account id and region.

3. Commit and push these changes up to Github

4. Bootstrap your AWS account with the following command. Be sure to replace `account1-profile`, `ACCOUNT1`, and `REGION` with the appropriate values for you account and region.

```
npx cdk bootstrap \
  --profile account1-profile \
  --cloudformation-execution-policies arn:aws:iam::aws:policy/AdministratorAccess \
  aws://ACCOUNT1/REGION
```

5. Deploy the pipeline stack, replacing `account1-profile`

```
npx cdk deploy \
  --profile account1-profile \
  CdkpipelinesDemoPipelineStack
```
