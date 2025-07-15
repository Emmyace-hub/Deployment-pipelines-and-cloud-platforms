name: Build Project

on:
  push:
    branches:
      - main
  pull_request:

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout code
        uses: actions/checkout@v3  # Use v3 for latest improvements

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'  # or your project's required Node version

      - name: Install dependencies
        run: npm install

      # Optional: Run build or tests
      - name: Run build
        run: npm run build

      # - name: Run tests
      #   run: npm test
