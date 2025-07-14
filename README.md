# Deployment-pipelines-and-cloud-platforms

Step 1: Choose a Cloud Platform 

Using AWS i go to IAM and create  a user "joes3bucket"
![1](./img/1.png)
afterwhich i set up the security credentials and copy the Acces key id "AKIA4T4OCJTCU7Q3BL3K" and password
which i would need to attach to my repository "https://github.com/Emmyace-hub/Deployment-pipelines-and-cloud-platforms"
![1](./img/1a.png)


Step 2: Create a GitHub Workflow File

Using the commands below to set a github workflow and create a new file "AWS-deploy.yml" in it
          mkdir -p .github/workflows
          touch .github/workflows/main.yml

![2](./img/2.png)

i attach the code snipet below into the new file "AWS-deploy.yml" in order to trigger a deployment to AWS everytime i push into the main branch
            
            
            name: Deploy to AWS

            on:
            push:
                branches:
                - main

            jobs:
            deploy:
                runs-on: ubuntu-latest

                steps:
                - name: Checkout code
                    uses: actions/checkout@v3  # Use latest v3 if possible

                - name: Set up AWS credentials
                    uses: aws-actions/configure-aws-credentials@v2  # v2 is newer
                    with:
                    aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
                    aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
                    aws-region: us-west-2

                - name: Deploy to AWS
                    run: |
                    # Replace this with your actual deployment script
                    echo "Deploying your app..."

![2](./img/2a.png)


Use this template for AWS deployment: